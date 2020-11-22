import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import Characters from "../components/Characters";

function Tab1() {
  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>作成済みのキャラクターシート</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">作成済みのキャラクターシート</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Characters />
        </IonContent>
      </IonPage>
    </div>
  );
}

export default Tab1;
