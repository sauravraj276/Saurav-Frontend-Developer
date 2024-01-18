import React, { useState } from "react";
import style from "./ItemCard.module.css";
import modelStyle from "./ItemModel.module.css";
import capsuleImage from "../../assets/images/capsule.png";
import ItemDetails from "../itemDetails/ItemDetails";

export default function ItemCard() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className={style.itemCard} onClick={openDialog}>
        <img src={capsuleImage}></img>
        <div className={style.cardInfo}>
          <div className={style.idStatus}>
            <p>c101</p>
            <p>retired</p>
          </div>
          <div className={style.itemType}>
            <p>Dragon 1.0</p>
          </div>
          <div className={style.lounchDate}>
            <p>December 8,2010</p>
          </div>
        </div>
        {isDialogOpen && (
          <div>
            <div className={modelStyle.dialogBackdrop} onClick={closeDialog}>
              <div
                className={modelStyle.dialog}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={modelStyle.imageSection}>
                  <img src={capsuleImage}></img>
                </div>
                <div className={modelStyle.detailsSection}>
                  <p className={modelStyle.capsuleSerial}>
                    Capsule Serial: C101
                  </p>
                  <div className="missions">
                    <div className={modelStyle.textBold}>Missions :</div>
                    <div className={modelStyle.mission}>Missions :</div>
                  </div>
                  <p>Details :</p>
                  <p>Reentered after three weeks in orbit.</p>
                  <p>Status : Retired</p>
                  <p>Type : Dragon 1.0</p>
                  <p>Capsule Id : dragon1</p>
                  <p>Landings : 0</p>
                  <p>Reuse Count : 0</p>
                  <p>Original Launch :</p>
                  <p>Date: December 8, 2010</p>
                  <p>Time: 15:43:00 UTC</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
