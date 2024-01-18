import React, { useState } from "react";
import style from "./ItemCard.module.css";
import modelStyle from "./ItemModel.module.css";
import capsuleImage from "../../assets/images/capsule.png";

export default function ItemCard({ capsule }) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const formattedDate = new Date(capsule.originalLaunch).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <>
      <div className={style.itemCard} onClick={openDialog}>
        <img src={capsuleImage} alt="Capsule"></img>
        <div className={style.cardInfo}>
          <div className={style.idStatus}>
            <p>{capsule.capsuleSerial}</p>
            <p
              className={
                capsule.status == "retired"
                  ? style.status_retired
                  : capsule.status == "unknown"
                  ? style.status_unknown
                  : capsule.status == "destroyed"
                  ? style.status_destroyed
                  : ""
              }
            >
              {capsule.status}
            </p>
          </div>
          <div className={style.itemType}>
            <p>{capsule.type}</p>
          </div>
          <div className={style.lounchDate}>
            <p>{formattedDate}</p>
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
                  <img src={capsuleImage} alt="Capsule"></img>
                </div>
                <div className={modelStyle.detailsSection}>
                  <p className={modelStyle.capsuleSerial}>
                    Capsule Serial: {capsule.capsuleSerial}
                  </p>
                  <div className="missions">
                    <div className={modelStyle.textBold}>Missions :</div>
                    {capsule.missions.map((mission, index) => (
                      <div key={index} className={modelStyle.mission}>
                        {mission.name} (Flight: {mission.flight})
                      </div>
                    ))}
                  </div>
                  <p>Details :</p>
                  <p>{capsule.details}</p>
                  <p>Status : {capsule.status}</p>
                  <p>Type : {capsule.type}</p>
                  <p>Capsule Id : {capsule.capsuleId}</p>
                  <p>Landings : {capsule.landings}</p>
                  <p>Reuse Count : {capsule.reuseCount}</p>
                  <p>Original Launch :</p>
                  <p>Date: {formattedDate}</p>
                </div>
                <div className={modelStyle.closeButton} onClick={closeDialog}>
                  &times;
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
