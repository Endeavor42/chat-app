import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  ButtonBase,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import { useDispatch } from "react-redux";

import "../../styles/newChat.scss";
import CustomTextfield from "../CustomTextfield";
import { addGroup, clearSelectedChips } from "../../redux/slices/groups.slice";

interface Props {
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function NameGroup({ setToggleDrawer, setActiveStep }: Props) {
  const [groupName, setGroupName] = useState<string>("");
  const [uploadedImage, setUploadedImage] = useState<string>("");
  let imageUploader = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    try {
      setUploadedImage(URL.createObjectURL(file));
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = () => {
    dispatch(addGroup({ groupName, uploadedImage }));
    dispatch(clearSelectedChips());
    setToggleDrawer(false);
  };

  useEffect(() => {
    return () => setActiveStep(0);
  }, [setActiveStep]);

  return (
    <div className="newChat">
      <div className="newChat__top">
        <div className="bottomBox">
          <IconButton
            onClick={handleBack}
            style={{ color: "white", marginRight: 20 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">New Group</Typography>
        </div>
      </div>
      <div className="newChat__groupAvatar">
        <Avatar
          onClick={() => imageUploader?.current?.click()}
          className="avatar hidden"
        >
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            ref={imageUploader}
            onChange={handleImageUpload}
          />
          {!uploadedImage ? (
            <PeopleAltIcon style={{ fontSize: 120 }} />
          ) : (
            <img src={uploadedImage} alt="uploaded" />
          )}
          <div className={`overlay ${uploadedImage ? "hidden" : undefined}`}>
            <CameraAltIcon style={{ marginBottom: 10 }} />
            <Typography variant="body2">ADD GROUP ICON</Typography>
          </div>
        </Avatar>
      </div>
      <div className="newChat__selected">
        <CustomTextfield
          placeholder="Group Subject"
          borderBottomColor="#00bfa5"
          borderSize="2px"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setGroupName(e.target.value)}
          value={groupName}
        />
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={100}
        width="100%"
      >
        {groupName.length > 0 && (
          <ButtonBase className="next--btn" onClick={handleConfirm}>
            <ArrowForwardRoundedIcon style={{ color: "#fff" }} />
          </ButtonBase>
        )}
      </Box>
    </div>
  );
}

export default NameGroup;
