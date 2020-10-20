## 3teneの対応機器について

### キーボードもしくはUSB接続のゲームパッド
>ショートカット機能（モーションや表情変化等）をキーやボタンに割り当てる事で
>モデルを動かす事が可能です。

><font color="Red">3tene のウインドウが非アクティブだとショートカットが動作しません。
>(フォーカスに依存します。)</font>

### MIDI機器
>ゲームパッドと同様にショートカット機能を割り当てて使用します。
>ノートオンが発生するMIDI機器であれば利用可能です。

><font color="Blue">3tene のウインドウが非アクティブの場合でもショートカットが動作します。
>(フォーカスに依存しません。)</font>

>MIDIコントローラや鍵盤楽器が使いやすいと思います。

### ウェブカメラ（USB接続の汎用カメラ）
>顔認識を可能にします。
>まぶた、口、顔の向き、上半身の傾きを認識し、モデルに同じ状態を再現します。

>また、プロ版では背景にウェブカメラ映像を使う事が可能です。
><font color="Blue">解像度QVGA(320x240)に対応しているウェブカメラが推奨です。</font>

>UVC (USB Video Class) 対応品が対象となります。
>一般的なビデオキャプチャボード等は UVC 非対応もありますので注意してください。

><font color="Red">ウェブカメラの選定については[こちら](#DeviceWebCamera.md)を参照してください。</font>

>#### 動作確認済みの機器

>下記のウェブカメラで動作確認をしています。

>Logicool HD Webcam C270
>BUFFALO BSW20KM05
>Elecom UCAM-DLV300T


### LeapMotion (USB接続の専用カメラ)
>腕および手を認識し、指の動きまでモデルに同じ状態を再現します。
>モデルの上半身だけ表示させるアナウンサーのようなスタイルにはお勧めです。
>モデル全体を表示させる用途に使用するには難しいかも知れません。
>顔認識機能は無いのでウェブカメラ等と組み合わせて使います。

>デスクトップモード、ヘッドマウントモードに対応しています。

### RealSense + Nuitrack (USB接続の専用カメラ - 3teneFREE は非対応)
>深度カメラで体全体を認識し、骨格トラッキングによりモデルに同じ状態を再現します。
>全身を写す為にカメラから離れると顔認識が難しくなる場合があります。
><font color="Red">※1 RealSense だけでなく Nuitrack (有料ソフトウェア)の購入が必要です。</font>
><font color="Blue">※2 使用には広い空間(2メートル×3メートル程度)が必要かと思います。</font>

>#### 動作確認済みの機器

>Intel RealSence D415

><font color="Blue">※D435 では動作確認をしていません。</font>
><font color="Blue">※D435i では動作確認をしていません。</font>
><font color="Blue">※D455 では動作確認をしていません。</font>


### iPhoneX 以降（スマートフォン - 3teneFREE は非対応）
>専用アプリにて iPhoneX 以降(<font color="Blue">※</font>)に搭載された TrueDepth カメラを使用した顔認識を行い、
>その認識結果を WiFi で PC (3tene) に送信する事により顔認識を行います。
>ウェブカメラ使用時と同等の機能があり、ウェブカメラよりも高精度で
>目の動きを再現するアイトラッキングが使用可能になります。
>首掛け式の自撮り棒を使う事で両手が空くので他の操作が可能になります。

><font color="Blue">※第二世代 iPhone SE (2020) は TrueDepth を搭載していない為、対象外となります。</font>

>#### 動作確認済みの機器
>iPhoneX (A11 Bionic プロセッサ + TrueDepth カメラ)
>iPhoneXR (A12 Bionic プロセッサ + TrueDepth カメラ)
>iPhone11 (A13 Bionic プロセッサ + TrueDepth カメラ)


### Azure Kinect (USB 3接続の専用カメラ - 3teneFREE は非対応)
>深度カメラで体全体を認識し、ボディトラッキングを実現します。
>広さを優先した広角モードと奥行きを優先した狭角など、
>用途に合わせてモードが変更できます。
>ただし、NVIDIA 製のグラフィックボード(GPU) GeForce GTX 1070 相当を
>必要とします。

><font color="Red">※Intel および AMD 製のグラフィックボード(GPU) は非対応です。</font>


### HTC Vive (VR機器 - 3teneFREE は非対応)
>ゴーグル（頭）、コントローラー（手）×２を使って、
>頭と手の位置でモデルを動かします。またモデルの移動が可能になります。
>コントローラーのボタンで表情等を操作する事も可能です。
>トラッカーを３つ追加し、腰、足×２に割り当てると
>全身の動きをモデルに再現する事が可能になります。
>※使用には広い空間(2メートル×2メートル以上)が必要かと思います。

>USB 3.0 と WiFi は干渉します。
>トラッカーを使う場合にはドングルとヘッドセットのケーブルを近づけないでください。

>ベースステーション（センサー）は赤外線を使用して動きを検知しています。
>窓からの日光はカーテン等で遮断し、赤外線を発生する装置は設置しないようにしてください。

><font color="Blue">HTC Vive Pro はアップグレード、フルセットどちらでも動作します。</font>
><font color="Blue">HTC Vive Cosmos でも動作します。</font>

### Oculus Rift (VR機器 - 3teneFREE は非対応)
>ゴーグル（頭）、コントローラー（手）×２を使って、頭と手の位置で
>モデルを動かします。モデルの移動は可能ですが足の完全な制御はできません。
>コントローラーのボタンで表情等を操作する事も可能です。
>※使用には広い空間(2メートル×2メートル以上)が必要かと思います。

><font color="Blue">※Oculus Rift S では動作確認をしていません。</font>
><font color="Blue">※Oculus Quest + Oculus Link では動作確認をしていません。</font>
><font color="Blue">※Oculus Quest2 + Oculus Link では動作確認をしていません。</font>
><font color="Red">※Oculus Go には対応していません。</font>
><font color="Red">※Oculus Quest (単体), Quest2 (単体) には対応していません。</font>
><font color="Red">※Oculus Rift は Mac に対応していません。</font>

### Perception Neuron (全身装着型センサー - 3teneSTUDIO のみ対応)
>顔以外の全身モーションキャプチャが可能。
>指にも対応しています。（Perception Neuron Pro は指に非対応。）
>[Perception Neuronについて](#PerceptionNeuron.md)

>製品の仕様により磁気に弱いという性質があり、
>電気製品などが無い部屋を用意する必要があるかと思います。

>詳しくは[注意事項 | Perception Neuron by Noitom](https://neuronmocap.com/node/1589)を参照してください。


