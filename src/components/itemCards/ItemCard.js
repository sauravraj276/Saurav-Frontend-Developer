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
      <li className={style.itemCard} onClick={openDialog}>
        <img src={capsuleImage} alt="Capsule"></img>
        <div className={style.cardInfo}>
          <div className={style.idStatus}>
            <p>{capsule.capsuleSerial}</p>
            <p
              className={
                capsule.status === "retired"
                  ? style.status_retired
                  : capsule.status === "unknown"
                  ? style.status_unknown
                  : capsule.status === "destroyed"
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
      </li>
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
                  <p className={modelStyle.capsuleDetails}>Missions :</p>
                  {capsule.missions.map((mission, index) => (
                    <p key={index} className={modelStyle.capsuleDetails}>
                      {mission.name} (Flight: {mission.flight})
                    </p>
                  ))}
                </div>
                <p className={modelStyle.capsuleDetails}>Details :</p>
                <p className={modelStyle.capsuleDetails}>{capsule.details}</p>
                <p className={modelStyle.capsuleDetails}>
                  Status : {capsule.status}
                </p>
                <p className={modelStyle.capsuleDetails}>
                  Type : {capsule.type}
                </p>
                <p className={modelStyle.capsuleDetails}>
                  Capsule Id : {capsule.capsuleId}
                </p>
                <p className={modelStyle.capsuleDetails}>
                  Landings : {capsule.landings}
                </p>
                <p className={modelStyle.capsuleDetails}>
                  Reuse Count : {capsule.reuseCount}
                </p>
                <p className={modelStyle.capsuleDetails}>Original Launch :</p>
                <p className={modelStyle.capsuleDetails}>
                  Date: {formattedDate}
                </p>
              </div>
              <div className={modelStyle.closeButton} onClick={closeDialog}>
                &times;
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
