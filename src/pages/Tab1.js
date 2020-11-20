import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import "./Tab1.css";
import Characters from "../components/Characters";

function Tab1() {
  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Character Sheet</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Character Sheet</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Characters />
        </IonContent>
      </IonPage>
    </div>
  );
}

export default Tab1;
