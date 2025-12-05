## 使い方

>3tene で使える機能について説明します。

>[メニューについて](#AboutMenu.md)

>初めて 3tene を使う場合は最初にアバターの読み込みを行ってください。
>ウェブカメラがあるならフェイストラッキングを試してみてください。
>ウェブカメラが無くても表情やモーションでアバターを動かす事が可能です。


### アバターの読み込み

>VRM もしくは Live2D のモデルデータを読み込みます。
>[アバターの読み込みについて](#AvaterSelect.md)


### シーンカメラの操作方法（カメラアングル）

>シーンカメラを移動させてアバターを見る位置や角度を変更します。
>[シーンカメラについて](#SceneCamera.md)


### フェイストラッキング（ウェブカメラ）

>カメラの顔認識を使ってアバターの顔を操作します。
>[ウェブカメラによるフェイストラッキングについて](#ft_webcamera.md)


### フェイストラッキング（iPhoneX 以降）

>iPhoneX 以降と連携して高精度フェイストラッキングを行います。
>[iPhoneXによるフェイストラッキングについて](#ft_iphone.md)
>>[iPhoneX フェイストラッキングの表情自動変更(表情認識)](#ft_iphone_expression.md)
>>[iPhoneX フェイストラッキングの FaceSync (PerfectSync)](#ft_iphone_FaceSync.md)


### リップシンク（顔認識、音声認識）

>アバターの口を動かす機能です。
>[リップシンクについて](#ft_LipSync.md)


### 表情

>表情を変更します。
>[表情について](#expression.md)


### モーション(VRM)

>モーションファイルでVRMアバターを動かす機能です。
>[モーション(VRM)について](#motion_vrm.md)


### エフェクト

>画面にエフェクトを表示します。
>[エフェクトについて](#effect.md)


### ウェブカメラ ハンドトラッキング

>ウェブカメラを使用したハンドトラッキングを行います。指も操作可能です。
>[ウェブカメラ ハンドトラッキングについて](#bt_WebCamHt.md)


### モーションアプリ連携について

>モーションアプリとの連携(ネットワーク対応)によりボディトラッキングを行います。
>[モーションアプリ連携 について](#bt_MotionApp.md)


### MOCOPI (モーションアプリ連携 - 3teneMoApp_Mocopi)

>アプリ連携により mocopi を使用したボディトラッキングを行います。
>[mocopi (App) について](#bt_MoAppMocopi.md)


### LeapMotion (モーションアプリ連携 - 3teneMoApp_HandTracker)

>アプリ連携により LeapMotion を使用したボディトラッキングを行います。
>[LeapMotion (App) について](#bt_MoAppLeapMotion.md)


### ウェブカメラ ボディトラッキング (モーションアプリ連携 - 3teneMoApp_WebCamBT)

>アプリ連携によりウェブカメラを使用したボディトラッキングを行います。
>[ウェブカメラ ボディトラッキング(App) について](#bt_MoAppWebCamBt.md)


### iPhone/iPad ボディトラッキング (モーションアプリ連携 - 3teneMoApp_BT)

>アプリ連携により iPhone/iPad を使用したボディトラッキングを行います。
>[iPhone/iPad ボディトラッキング (App) について](#bt_MoAppBt_iPhone.md)


### Azure Kinect (モーションアプリ連携 - 3teneMoApp_Kinect)

>アプリ連携により Azure Kinect を使用したボディトラッキングを行います。
>[Azure Kinect (App) について](#bt_MoAppAzureKinect.md)


### Nuitrack + RealSense (モーションアプリ連携 - 3teneMoApp_Nuitrack)

>アプリ連携により Nuitrack を使用したボディトラッキングを行います。
>[Nuitrack + RealSense (App) について](#bt_MoAppNuitrack.md)


### VR (モーションアプリ連携 - 3teneMoApp_VR)

>アプリ連携により VR を使用したボディトラッキングを行います。
>[VR (App) について](#bt_MoAppVR.md)


### LeapMotion (FREE 版のみ)

>専用センサーで腕、手、指を動かします。
>[LeapMotionについて](#bt_LeapMotion.md)

### Perception Neuron

>センサーを付けたボディストラップ（固定ベルト）を装着して全身を動かします。
>[Perception Neuronについて](#bt_PerceptionNeuron.md)


### Hi5 VR GLOVE

>センサーを付けたグローブを装着して両手を動かします。
>[Hi5 VR GLOVEについて](#Hi5VrGlove.md)


### MIDI

>MIDI 機器を使ってショートカットを利用します。
>[MIDI について](#UsingMidi.md)


### シーンカメラのアングル保存

>シーンカメラの位置や向きを保存します。
>[シーンカメラのアングルについて](#CameraAngle.md)


### スクリーンショット

>現在の画面を画像ファイルに保存します。
>[スクリーンショットについて](#screenshot.md)


### 録画
>現在の画面を録画して動画ファイルに保存します。
>[録画について](#recordingVideo.md)


### 背景変更

>背景を変更します。
>背景に画像やグリーンバックの設定を行います。
>[背景変更について](#background.md)


### オブジェクトの配置

>3tene のシーンに外部から取り込んだ3Dオブジェクト(以下オブジェクト)を配置します。
>OBJファイル、FBXファイル、GLBファイルの読み込みに対応しています。
>※OBJファイルがMTLファイル、テクスチャ画像を参照する場合はファイルを全て含めてください。
>[オブジェクトの配置について](#ObjectPlacement.md)


### 自動実行(3teneSTUDIO のみ)

>動画ファイルやWaveファイルでアバターを動かします。
>MP4ファイルでフェイストラッキング、Wavファイルでリップシンクに対応しています。
>[自動実行について](#AutoRun.md)


### 仮想ウェブカメラ

>3tene の画面を仮想ウェブカメラに出力します。
>メニューやウェブカメラプレビュー等の2D画像は出力されません。
>[仮想ウェブカメラについて](#VirtualWebCamera.md)


### NDI

>NDI を利用してネットワーク経由（イーサネットのみ）で画面を出力します。
>メニュー等の2D画像は出力されないので OBS を使う場合にお勧めです。
>[NDIについて](#NDI.md)


### Spout (Windows のみ)

>Spout を利用して他のアプリから画面を参照できるようにします。
>メニュー等の2D画像は出力されないので OBS を使う場合にお勧めです。
>[Spoutについて](#Spout.md)


### Syphon (Mac のみ)

>Syphon を利用して他のアプリから画面を参照できるようにします。
>メニュー等の2D画像は出力されないので OBS を使う場合にお勧めです。
>[Syphonについて](#Syphon.md)


### メモ表示機能

>3tene 画面内にメモ（テキストファイル）を読み込み表示します。
>[メモ機能について](#NotePad.md)


### イメージボード

>3tene 画面内の前面(アバターよりも前)に画像を表示します。
>[イメージボードについて](#ImageBoard.md)


### モーション(Live2D)

>Live2Dアバターをモーションで動かす機能です。
>[モーション(Live2D)について](#motion_live2d.md)


### アバターの調整

>アバターに関連する各種設定を行います。

>>[機器タブ](#AdjustAvaterDevice.md) トラッキング、アバターに使用する機器を設定します
>>[基本タブ](#AdjustAvaterNormal.md) トラッキング以外を設定します。
>>[顔タブ](#AdjustAvaterFace.md) フェイストラッキング関連を設定します。
>>[体タブ](#AdjustAvaterBody.md) ボディトラッキング関連を設定します。
>>[その他タブ](#AdjustAvaterOther.md) その他の項目を設定します。


### 設定(3tene)

>3teneの各種設定を行います。

>>[ショートカットタブ](#settingShortcut.md) ショートカットの設定を行います。
>>[システムタブ](#settingSystem.md) 3teneのシステム関連の設定を行います。
>>[光源タブ](#settingLight.md) 光源の設定を行います。
>>[カメラタブ](#settingCamera.md) シーン内カメラの設定を行います。
>>[録画タブ](#settingRecording.md) 録画、スクリーンショットの設定を行います。
>>[情報タブ](#settingInfomation.md) 3tene、PC等の情報が書いてあります。


### 設定(モーションアプリ連携)

>3tene モーションアプリの各種設定を行います。

>>[VRタブ](#settingVR.md) VRモード利用時の設定を行います。


