import React from 'react';
import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent, IonLabel} from "@ionic/react"

function Tab2() {
  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>キャラクターシート作成</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">キャラクターシート作成</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonLabel>hello</IonLabel>
        </IonContent>
      </IonPage>
    </div>
  )
}

export default Tab2
