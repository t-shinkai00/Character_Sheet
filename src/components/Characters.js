import React from "react";
import {
  IonCard,
  IonHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonChip,
  IonCardHeader,
  IonAvatar,
  IonLabel,
} from "@ionic/react";

import "./Characters.css";
import { Route } from "react-router";

// 能力値を配列に格納して欲しい
// IonAvatarっていうのがあります
/*

{
  // 英語版のキャラシート見た感じ
  playerName,
  characterName,
  age,
  gender,
  occupation,
  characteristics[{ name: 'STR', value: 90 }] or { STR: 90, INT: 80 }, // 能力値
  investigatorSkills[{ name: '威圧', value: 90 }], //技能値
  weapons[],//武器
  combat,//戦闘
  build,//多分建築わからないからたつみに聞く
  belongings[],//持ち物
  status[],// 状態
  background
}

*/
function Characters() {
  const characters = [
    {
      profilePicture:
        "https://www.nippon.com/ja/ncommon/contents/japan-topics/211001/211001.jpg",
      playerName: "ふうが",
      characterName: "徳川家康",
      isParticipating: false,
      age: 14,
      gender: "男性",
      occupation: "中学生",
      charactteristics: [
        { name: "STR", value: 55 },
        { name: "CON", value: 55 },
        { name: "DEX", value: 55 },
        { name: "APP", value: 55 },
        { name: "SIZ", value: 55 },
        { name: "INT", value: 55 },
        { name: "EDU", value: 55 },
        { name: "MOV", value: 9 },
      ],
      investigatorSkills: [{ name: "威圧", value: 15 }],
      weapons: ["鈍器"],
      belongings: ["ライト", "メモ帳"],
      background: ["ここに人物の背景を入力"],
      status: ["怪我をしてるなどの人物の状態を入力"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
    },
    {
      profilePicture:
        "https://app.k-server.info/history/wp-content/uploads/2016/01/Toyotomi_hideyoshi.jpg",
      playerName: "ゆうき",
      characterName: "豊臣秀吉",
      age: 20,
      gender: "女性",
      occupation: "警察官",
      charactteristics: [
        { name: "STR", value: 55 },
        { name: "CON", value: 55 },
        { name: "DEX", value: 55 },
        { name: "APP", value: 55 },
        { name: "SIZ", value: 55 },
        { name: "INT", value: 55 },
        { name: "EDU", value: 55 },
        { name: "MOV", value: 9 },
      ],
      investigatorSkills: [{ name: "威圧", value: 15 }],
      weapons: ["鈍器"],
      belongings: ["ライト", "メモ帳"],
      background: ["ここに人物の背景を入力"],
      status: ["怪我をしてるなどの人物の状態を入力"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
    },
    {
      profilePicture:
        "https://mag.japaaan.com/wp-content/uploads/2019/10/Oda-Nobunaga-660x350.jpg",
      playerName: "たつみ",
      characterName: "織田信長",
      age: 32,
      gender: "ゲイ",
      occupation: "サラリーマン",
      charactteristics: [
        { name: "STR", value: 55 },
        { name: "CON", value: 55 },
        { name: "DEX", value: 55 },
        { name: "APP", value: 55 },
        { name: "SIZ", value: 55 },
        { name: "INT", value: 55 },
        { name: "EDU", value: 55 },
        { name: "MOV", value: 9 },
      ],
      investigatorSkills: [{ name: "威圧", value: 15 }],
      weapons: ["鈍器"],
      belongings: ["ライト", "メモ帳"],
      background: ["ここに人物の背景を入力"],
      status: ["怪我をしてるなどの人物の状態を入力"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
    },
  ];

  return (
    <div>
      {characters.map((character, index) => (
        <IonCard
          style={{ borderRadius: "8px" }}
          href="/tab1/detail"
          key={character}
        >
          <IonCardHeader style={{ display: "flex", alignItems: "center" }}>
            <IonAvatar>
              <img src={character.profilePicture} alt="キャラクターアイコン" />
            </IonAvatar>
            <IonLabel color="dark">{character.characterName}</IonLabel>
            <IonLabel color="medium">{character.playerName}</IonLabel>
          </IonCardHeader>
          <IonCardContent>
            <IonChip color="primary" outline="true">
              年齢: {character.age}
            </IonChip>
            <IonChip color="danger" outline="true">
              性別: {character.gender}
            </IonChip>
            <IonChip color="success" outline="true">
              職業: {character.occupation}
            </IonChip>
          </IonCardContent>
          {/* <IonChip>
              <IonLabel></IonLabel>
              <IonLabel>hello</IonLabel>
            </IonChip> */}
        </IonCard>
      ))}
    </div>
  );
}

export default Characters;
