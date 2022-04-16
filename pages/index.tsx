import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "../styles/page/page1.module.scss";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import dmh from "../asset/dmh.png";
import Texaglo from "../asset/Texaglo.png";
import Header from "../component/header";
import Footer from "../component/footer";
import { StepLabel } from "@mui/material";

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [label, setLabel] = useState("");
  const handleClickOpen = (scrollType, temp) => () => {
    setLabel(temp);
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [temp, setTemp] = useState(["Layer 1", "Layer 2"]);

  const popUp = () => {
    var len = "Layer " + Number(temp.length + 1);
    console.log(temp);
    setTemp((temp) => [...temp, len]);

    console.log(temp);
  };
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 17,
    padding: 3.5,
    margin: 0,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(2px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(40px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "white" : "black",
      width: 16,
      height: 16,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop}>Art Generator</div>
          <div className={styles.bodyMain}>
            <div className={styles.left}>
              {temp.map((value, index) => (
                <div className={styles.part1} key={index}>
                  <div>{value}</div>
                  <button onClick={() => popUp()}>+</button>
                </div>
              ))}

              <div className={styles.part3}>
                <button onClick={() => popUp()}>+</button>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.quote}></div>
              <div className={styles.tapGroup}>
                <div className={styles.setTap}>
                  <button>PREVIEW</button>
                  <button> MAKE GIF</button>
                  <button>Generate</button>
                </div>
                <div className={styles.actTap}>
                  <div className={styles.btnFunc}>
                    <div>
                      <button
                        onClick={handleClickOpen("paper", "How many NFT...")}
                      >
                        How many NFT...
                      </button>
                    </div>
                    <div className={styles.leftTap}>
                      <button>UPLOAD</button>
                      <button>UPDATE</button>
                    </div>
                  </div>
                  <div className={styles.btnDown}>
                    <button>DOWNLOAD</button>
                  </div>
                </div>
              </div>

              <div className={styles.solState}>
                <span>20 SOL</span>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <span>Layer name</span>
              </div>

              <div>
                <button onClick={handleClickOpen("paper", "Project Name")}>
                  Project Name
                </button>
              </div>

              <div>
                <button onClick={handleClickOpen("paper", "Website Name")}>
                  Website Name
                </button>
              </div>

              <div>
                <button
                  onClick={handleClickOpen("paper", "Project Description")}
                >
                  Project Description
                </button>
              </div>

              <div>
                <button onClick={handleClickOpen("paper", "Base uri")}>
                  Base uri
                </button>
              </div>

              <div>
                <span>DIMENSIONS</span>
              </div>

              <div className={styles.xy}>
                <input
                  defaultValue="X"
                  onChange={() => {
                    console.log("first");
                  }}
                />
                <input
                  defaultValue="Y"
                  onChange={() => {
                    console.log("first");
                  }}
                />
              </div>

              <div>
                <span>image Rarity</span>
              </div>

              <div className={styles.traitState}>
                <div>
                  <span>25%</span>
                  <span>Trait 1</span>
                  <Slider
                    aria-label="Trait_1"
                    size="small"
                    defaultValue={67}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>25%</span>
                  <span>Trait 2</span>
                  <Slider
                    aria-label="Trait_2"
                    size="small"
                    defaultValue={27}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 3</span>
                  <Slider
                    aria-label="Trait_3"
                    size="small"
                    defaultValue={15}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>20%</span>
                  <span>Trait 4</span>
                  <Slider
                    aria-label="Trait_4"
                    size="small"
                    defaultValue={30}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <span>10%</span>
                  <span>Trait 5</span>
                  <Slider
                    aria-label="Trait_5"
                    size="small"
                    defaultValue={30}
                    sx={{
                      width: "35%",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className={styles.chainState}>
                <div className={styles.chain1}>
                  <div className={styles.chainTitle}>Ethereum</div>
                  <FormControlLabel
                    style={{ margin: 0 }}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                  <span className={styles.chainTitle}>Solana</span>
                </div>
                <div className={styles.chain2}>
                  <span className={styles.chainTitle}>IPFS</span>
                  <FormControlLabel
                    style={{ margin: 0 }}
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                  <span className={styles.chainTitle}>Arweave</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Please Edit</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <TextField id="filled-basic" label={label} variant="filled" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
