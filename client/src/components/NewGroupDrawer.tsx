import React, { Fragment, useState } from "react";
import {
  Avatar,
  ButtonBase,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

import "../styles/chatDrawer.scss";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IParticipant {
  id: number;
  name: string;
  text: string;
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

function NewGroupDrawer({ open, setOpen }: Props) {
  const [participants, setParticipants] = useState<IParticipant[]>(data);
  const [selectedChips, setSelectedChips] = useState<IParticipant[]>([]);

  const handleDelete = (selected: IParticipant) => {
    setSelectedChips((prev: IParticipant[]) =>
      prev.filter((item: IParticipant) => item.id !== selected.id)
    );
    setParticipants((prev) => [...prev, selected]);
  };

  const handleSelected = (participant: IParticipant) => {
    setSelectedChips((prev) => [...prev, participant]);
    setParticipants((prev) =>
      prev.filter((item: IParticipant) => item.id !== participant.id)
    );
  };

  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      anchor="left"
      open={open}
      elevation={0}
      onClose={() => setOpen(false)}
    >
      <div className="chatDrawer">
        <div className="chatDrawer__top">
          <div className="bottomBox">
            <IconButton
              onClick={() => setOpen(false)}
              style={{ color: "white", marginRight: 20 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Add group participants</Typography>
          </div>
        </div>
        <div className="chatDrawer__selected">
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
          <div
            style={{
              height: 35,
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
            }}
          >
            <InputBase
              inputRef={(input) => input?.focus()}
              placeholder="Type contact name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <List className="chatDrawer__participants">
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
        <div className="chatDrawer__bottom">
          {/* <div className="next--btn" /> */}
          <ButtonBase className="next--btn">
            <ArrowForwardRoundedIcon style={{ color: "#fff" }} />
          </ButtonBase>
        </div>
      </div>
    </Drawer>
  );
}

export default NewGroupDrawer;
