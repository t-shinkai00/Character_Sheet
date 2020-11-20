import React from "react";
import {
  IonIcon,
  IonCard,
  IonHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";

import "./Characters.css";

function Characters() {
  const characters = [
    {
      icon:
        "https://www.nippon.com/ja/ncommon/contents/japan-topics/211001/211001.jpg",
      pName: "ふうが",
      cName: "徳川家康",
      age: 14,
      gender: "男性",
      occupation: "中学生",
    },
    {
      icon:
        "https://app.k-server.info/history/wp-content/uploads/2016/01/Toyotomi_hideyoshi.jpg",
      pName: "ゆうき",
      cName: "豊臣秀吉",
      age: 20,
      gender: "女性",
      occupation: "警察官",
    },
    {
      icon:
        "https://mag.japaaan.com/wp-content/uploads/2019/10/Oda-Nobunaga-660x350.jpg",
      pName: "たつみ",
      cName: "織田信長",
      age: 32,
      gender: "ゲイ",
      occupation: "サラリーマン",
    },
  ];
  return (
    <div>
      {characters.map((character) => (
        <div>
          <IonCard>
            <IonHeader className="align__items">
              <div className="trim">
                <img src={character.icon} alt="キャラクターアイコン" />
              </div>
              <div>
                <IonCardTitle style={{ paddingLeft: "10px" }}>
                  {character.cName}
                </IonCardTitle>
                <IonCardSubtitle style={{ paddingLeft: "12px" }}>
                  {character.pName}
                </IonCardSubtitle>
              </div>
            </IonHeader>
            <IonCardContent>
              <div className="align__items space__between">
                <h5>年齢: {character.age}</h5>
                <h5>性別: {character.gender}</h5>
                <h5>職業: {character.occupation}</h5>
              </div>
            </IonCardContent>
            {/* <IonChip>
              <IonLabel></IonLabel>
              <IonLabel>hello</IonLabel>
            </IonChip> */}
          </IonCard>
        </div>
      ))}
    </div>
  );
}

export default Characters;
