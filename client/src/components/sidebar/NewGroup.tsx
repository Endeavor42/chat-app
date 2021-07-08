import React, { Fragment, useState } from "react";
import {
  Avatar,
  ButtonBase,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import { useDispatch, useSelector } from "react-redux";

import {
  addSelectedChips,
  groupSelector,
  removeSelectedChips,
} from "../../redux/slices/groups.slice";
import CustomTextfield from "../CustomTextfield";
import { IParticipant } from "./sidebar.types";

import "../../styles/newGroup.scss";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const data: IParticipant[] = [
  {
    id: 0,
    name: "Falzaro",
    text: "It's time to blaze out!",
  },
  {
    id: 1,
    name: "Gregar",
    text: "Unleash the beast!",
  },
  {
    id: 2,
    name: "Endeavor",
    text: "I aspire to become the number 1 hero",
  },
  {
    id: 3,
    name: "Bob",
    text: "I'm just a regular guy",
  },
  {
    id: 4,
    name: "Ash",
    text: "Gotta catch em' all!",
  },
];

function NewGroup({ setActiveStep }: Props) {
  const [findName, setFindName] = useState<string>("");
  const [participants, setParticipants] = useState<IParticipant[]>(data);
  const { selectedChips } = useSelector(groupSelector);
  const dispatch = useDispatch();

  const handleDelete = (selected: IParticipant) => {
    setParticipants((prev) => [...prev, selected]);
    dispatch(removeSelectedChips(selected));
  };

  const handleSelected = (participant: IParticipant) => {
    dispatch(addSelectedChips(participant));
    setParticipants((prev) =>
      prev.filter((item: IParticipant) => item.id !== participant.id)
    );
  };

  return (
    <div className="newGroup">
      <div className="newGroup__top">
        <div className="bottomBox">
          <IconButton
            onClick={() => setActiveStep((prevStep) => prevStep - 1)}
            style={{ color: "white", marginRight: 20 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Add group participants</Typography>
        </div>
      </div>
      <div className="newGroup__selected">
        {/*TODO: Chips of selected participants */}
        {selectedChips.map((selected: IParticipant) => (
          <Chip
            key={selected.id}
            avatar={<Avatar>{selected.name[0]}</Avatar>}
            label={selected.name}
            className="selectedChip"
            onDelete={() => handleDelete(selected)}
          />
        ))}
        <CustomTextfield
          placeholder="Type contact name"
          borderBottomColor="rgba(0, 0, 0, 0.25)"
          value={findName}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setFindName(e.target.value)}
        />
      </div>
      <List className="newGroup__participants">
        {participants.map((participant: IParticipant, i: number) => (
          <Fragment key={i}>
            <ListItem
              onClick={() => handleSelected(participant)}
              className="listItem"
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={participant.name}
                secondary={participant.text}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      <div className="newGroup__bottom">
        {selectedChips.length > 0 && (
          <ButtonBase
            className="next--btn"
            onClick={() => setActiveStep((prevStep) => prevStep + 1)}
          >
            <ArrowForwardRoundedIcon style={{ color: "#fff" }} />
          </ButtonBase>
        )}
      </div>
    </div>
  );
}

export default NewGroup;
