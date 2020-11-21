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
  IonRow,
  IonCol,
  IonGrid,
  IonText,
  IonListHeader,
  IonItem,
  IonList,
  IonItemSliding,
  IonButton,
} from "@ionic/react";

/*

{
  // 英語版のキャラシート見た感じ
  combat,//戦闘
  build,//多分建築わからないからたつみに聞く
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
      characteristics: [
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
      weapons: ["素手", "刀"],
      belongings: ["ライト", "メモ帳"],
      statuses: ["足負傷　DEX-20 MOV-2", "混乱状態　SAN-10"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
      background: [
        "戦国時代から江戸時代初期にかけての武将・戦国大名[1]・天下人。安祥松平家9代当主で徳川家や徳川将軍家、御三家の始祖。旧称は松平 元康（まつだいら もとやす）。戦国時代に終止符を打ち、朝廷より征夷大将軍に任せられ江戸幕府を開く[1]。三英傑のひとり。家系は三河国の国人土豪・松平氏。幼名は竹千代[1]。通称は次郎三郎のちに蔵人佐。諱は今川義元より偏諱を受けて元信（もとのぶ）次いで元康と名乗るが、今川氏から独立した際に「元」を返上して家康に改める。勅許され永禄9年12月29日（1567年2月18日）に徳川氏に改姓。本姓は私的には源氏を称していた。従五位の叙位に際し藤原氏と称し、豊臣政権では豊臣氏を称した形跡もあるが、天正16年（1588年）以降に源氏を再び称している[3]。",
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
      characteristics: [
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
      weapons: ["素手", "刀"],
      belongings: ["ライト", "メモ帳"],
      statuses: ["足負傷　DEX-20 MOV-2", "混乱状態　SAN-10"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
      background: [
        "戦国時代から安土桃山時代にかけての武将、大名。天下人、（初代）武家関白、太閤。三英傑の一人[1][2]。初め木下氏で、後に羽柴氏に改める。皇胤説があり、諸系図に源氏や平氏を称したように書かれているが、近衛家の猶子となって藤原氏に改姓した後、正親町天皇から豊臣氏を賜姓されて本姓とした。尾張国愛知郡中村郷の下層民の家に生まれたとされている（出自参照）。当初、今川家に仕えるも出奔した後に織田信長に仕官し、従来にはない斬新な奇策や政策で次第に頭角を現した。信長が本能寺の変で明智光秀に討たれると「中国大返し」により京へと戻り山崎の戦いで光秀を破った後、清洲会議で信長の孫・三法師を擁して織田家内部の勢力争いに勝ち、信長の後継の地位を得た。大坂城を築き、関白・太政大臣に就任し、朝廷から豊臣の姓を賜り、日本全国の大名を臣従させて天下統一を果たした。天下統一後は太閤検地や刀狩令、惣無事令、石高制などの全国に及ぶ多くの政策で国内の統合を進めた。理由は諸説あるが明の征服を決意して朝鮮に出兵した文禄・慶長の役の最中に、嗣子の秀頼を徳川家康ら五大老に託して病没した。墨俣の一夜城、金ヶ崎の退き口、高松城の水攻め、中国大返し、石垣山一夜城などが機知に富んだ功名立志伝として知られる。",
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
      characteristics: [
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
      weapons: ["素手", "刀"],
      belongings: ["ライト", "メモ帳"],
      statuses: ["足負傷　DEX-20 MOV-2", "混乱状態　SAN-10"],
      combat: [
        { name: "DB", value: 0 },
        { name: "build", value: 0 },
        { name: "evasion", value: 23 },
      ],
      background: [
        "織田弾正忠家の当主・織田信秀の子に生まれ、尾張（愛知県西部）の一地方領主としてその生涯を歩み始めた。信長は織田弾正忠家の家督を継いだ後、尾張守護代の織田大和守家、織田伊勢守家を滅ぼすとともに、弟の織田信行を排除して、尾張一国の支配を徐々に固めていった。永禄3年（1560年）、信長は桶狭間の戦いにおいて駿河の戦国大名・今川義元を撃破した。そして、三河の領主・徳川家康（松平元康）と同盟を結ぶ。永禄8年（1565年）、犬山城の織田信清を破ることで尾張の統一を達成した。一方で、室町幕府将軍足利義輝が殺害された（永禄の政変）後に、足利将軍家の足利義昭から室町幕府再興の呼びかけを受けており、信長も永禄9年（1566年）には上洛を図ろうとした。美濃の戦国大名・斉藤氏（一色氏）との対立のためこれは実現しなかったが、永禄10年（1567年）には斎藤氏の駆逐に成功し（稲葉山城の戦い）、尾張・美濃の二カ国を領する戦国大名となった。そして、改めて幕府再興を志す意を込めて、「天下布武」の印を使用した。翌年10月、足利義昭とともに信長は上洛し、三好三人衆などを撃破して、室町幕府の再興を果たす。信長は、室町幕府との二重政権（連合政権）を築いて、「天下」（五畿内）の静謐を実現することを目指した[注釈 4]。しかし、敵対勢力も多く、元亀元年（1570年）6月、越前の朝倉義景・北近江の浅井長政を姉川の戦いで破ることには成功したものの、三好三人衆や比叡山延暦寺、石山本願寺などに追い詰められる。同年末に、信長と義昭は一部の敵対勢力と講和を結び、ようやく窮地を脱した。元亀2年（1571年）9月、比叡山を焼き討ちする。しかし、その後も苦しい情勢は続き、三方ヶ原の戦いで織田・徳川連合軍が武田信玄に敗れた後、元亀4年（1573年）、将軍・足利義昭は信長を見限る。信長は義昭と敵対することとなり、同年中には義昭を京都から追放した（槇島城の戦い）。将軍不在のまま中央政権を維持しなければならなくなった信長は、天下人への道を進み始める。元亀から天正への改元を実現すると、天正元年（1573年）中には浅井長政・朝倉義景・三好義継を攻め、これらの諸勢力を滅ぼすことに成功した。天正3年（1575年）には、長篠の戦いでの武田氏に対して勝利するとともに、右近衛大将に就任し、室町幕府に代わる新政権の構築に乗り出した。翌年には安土城の築城も開始している。しかし、天正5年（1577年）以降、松永久秀、別所長治、荒木村重らが次々と信長に叛いた。天正8年（1580年）、長きにわたった石山合戦（大坂本願寺戦争）に決着をつけ、翌年には京都で大規模な馬揃え（京都御馬揃え）を行い、その勢威を誇示している。天正10年（1582年）、甲州征伐を行い、武田勝頼を自害に追いやって武田氏を滅亡させ、東国の大名の多くを自身に従属させた。同年には信長を太政大臣・関白・征夷大将軍のいずれかに任ずるという構想が持ち上がっている（三職推任）。その後、信長は長宗我部元親討伐のために四国攻めを決定し、三男・信孝に出兵の準備をさせている。そして、信長自身も毛利輝元ら毛利氏討伐のため、中国地方攻略に赴く準備を進めていた。しかし、6月2日、重臣の明智光秀の謀反によって、京の本能寺で自害に追い込まれた（本能寺の変）。一般に、信長の性格は、極めて残虐で、また、常人とは異なる感性を持ち、家臣に対して酷薄であったと言われている。一方、信長は世間の評判を非常に重視し、家臣たちの意見にも耳を傾けていたという異論も存在する。なお、信長は武芸の鍛錬に励み、趣味として鷹狩り・茶の湯・相撲などを愛好した。南蛮などの異国に興味を持っていたとも言われる[注釈 5]。政策面では、信長は室町幕府将軍から「天下」を委任されるという形で自らの政権を築いた[注釈 6]。天皇や朝廷に対しては協調的な姿勢を取っていたという見方が有力となっている[注釈 7]。江戸時代には、新井白石らが信長の残虐性を強く非難したように、信長の評価は低かった。とはいえ、やがて信長は勤王家として称賛されるようになり、明治時代には神として祀られている[注釈 8]。第二次世界大戦後には、信長はその政策の新しさから、革新者として評価されるようになった。しかし、このような革新者としての信長像には疑義が呈されつつあり、2010年代の歴史学界では、信長の評価の見直しが進んでいる[注釈 9]。 また、第六天魔王という呼び名もある。",
      ],
    },
  ];

  return (
    <div>
      {characters.map((character, index) => (
        <IonCard
          style={{ borderRadius: "8px" }}
          href={`/tab1/detail/${index}`}
          key={index}
        >
          <IonCardHeader style={{ display: "flex", alignItems: "center" }}>
            <IonAvatar>
              <img src={character.profilePicture} alt="キャラクターアイコン" />
            </IonAvatar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel color="dark">{character.characterName}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel color="medium">{character.playerName}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent>
            <IonChip color="primary" outline="true">
              年齢: {character.age}
            </IonChip>
            <IonChip color="secondary" outline="true">
              性別: {character.gender}
            </IonChip>
            <IonChip color="tertiary" outline="true">
              職業: {character.occupation}
            </IonChip>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
}

export default Characters;
