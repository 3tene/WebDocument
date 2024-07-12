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
>QVGA に非対応のウェブカメラでも動作しますが速度や精度が低下する場合があります。
><font color="Red">※縦長の解像度には対応していません。</font>

>ウェブカメラは UVC (USB Video Class) 対応品が対象となります。
>一般的なビデオキャプチャボード等は UVC 非対応もありますので注意してください。

><font color="Red">ウェブカメラの選定については[こちら](#DeviceWebCamera.md)を参照してください。</font>

>#### 動作確認済みの機器

>下記のウェブカメラで動作確認をしています。

>Logicool HD Webcam C270
>BUFFALO BSW20KM05
>Elecom UCAM-DLV300T
>CIO CIO-WC1080P3


### LeapMotion (USB接続の専用カメラ)
>腕および手を認識し、指の動きまでモデルに同じ状態を再現します。
>モデルの上半身だけ表示させるアナウンサーのようなスタイルにはお勧めです。
>モデル全体を表示させる用途に使用するには難しいかも知れません。
>顔認識機能は無いのでウェブカメラ等と組み合わせて使います。

>デスクトップモード、ヘッドマウントモードに対応しています。

><font color="Red">※USB 3.x での接続が必須となります。</font>


### RealSense + Nuitrack (USB接続の専用カメラ - 3teneFREE は非対応)
>Nuitrack (有料ソフトウェア、別途購入が必要) と専用の深度カメラを使用します。
>Nuitrack が深度カメラから得た情報を解析し、骨格トラッキングによりモデルに同じ状態を再現します。

>Nuitrack が提供するフェイストラッキング機能にも対応していますが、
>深度カメラに全身を写す必要があるため、深度カメラから離れると顔認識が難しくなります。

><font color="Red">※1 RealSense だけでなく Nuitrack (有料ソフトウェア)の購入が必要です。</font>
><font color="Blue">※2 使用には広い空間(2メートル×3メートル程度)が必要かと思います。</font>

>#### 動作確認表

<font color="Red">※USB 3.x での接続が必須となります。</font>

|機器名|Nuitrack 対応|3tene|
|---|:---:|:---|
|RealSence Depth Camera D415|○|正常動作を確認済み。|
|RealSence Depth Camera D435|○|動作すると報告あり。|
|RealSence Depth Camera D435i|○|<font color="Blue">動作確認をしていません。</font>|
|RealSence Depth Camera D455|○|<font color="Blue">動作確認をしていません。</font>|
|RealSence LiDAR Camera L515|○|<font color="Blue">動作確認をしていません。</font>|
|RealSence Tracking Camera T265|×|<font color="Red">動作しません。</font>|
|RealSense ID F455|×|<font color="Red">動作しません。</font>|
|RealSence Depth Module D400|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Depth Module D410|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Depth Module D415|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Depth Module D420|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Depth Module D430|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Depth Module D450|×|<font color="Red">動作確認をしていません。</font>|
|RealSence Tracking Module T261|×|<font color="Red">動作しません。</font>|
|Kinect V1|○|<font color="Blue">動作確認をしていません。</font>|
|Kinect V2|○|<font color="Blue">動作確認をしていません。</font>|
|Azure Kinect|○|<font color="Blue">正常に動作しません。</font>|
|Asus Xtion 2|○|<font color="Blue">動作確認をしていません。</font>|
|Asus Xtion Pro|○|<font color="Blue">動作確認をしていません。</font>|
|Orbbec Astra S|○|<font color="Blue">動作確認をしていません。</font>|
|Orbbec Astra Plus|○|<font color="Blue">動作確認をしていません。</font>|


### iPhoneX 以降（スマートフォン - 3teneFREE は非対応）
>専用アプリにて iPhoneX 以降(<font color="Blue">※</font>)に搭載された TrueDepth を使用した顔認識を行い、
>その認識結果を WiFi で PC (3tene) に送信する事により顔認識を行います。
>ウェブカメラ使用時と同等の機能があり、ウェブカメラよりも高精度で
>目の動きを再現するアイトラッキングが使用可能になります。

>iPhone を手に持たず、台座や首掛け式の自撮り棒等で固定して使用する事をお勧めします。


>#### 動作確認表

|機器名|プロセッサ|センサー|状況|
|---|:---:-|:---:|:---|
|iPhone X|A11 Bionic|TrueDepth|動作を確認済み。<br><font color="Red">※動作が不安定になる場合があるようです。</font>|
|iPhone XR|A12 Bionic|TrueDepth|正常動作を確認済み。|
|iPhone XS|A12 Bionic|TrueDepth|<font color="Blue">動作確認をしていません。</font>|
|iPhone 11|A13 Bionic|TrueDepth|正常動作を確認済み。|
|iPhone SE 2020|A13 Bionic|無し|<font color="Blue">動作確認をしていません。</font><br>iOS 14 以降にアップデートすると動作するようです。<br>（TrueDepth 非搭載なので保証外。)|
|iPhone 12|A14 Bionic|TrueDepth|<font color="Blue">動作確認をしていません。</font>|
|iPhone 12 PRO|A14 Bionic|TrueDepth<br>LiDAR|<font color="Blue">動作確認をしていません。</font>|
|iPhone 13|A15 Bionic|TrueDepth<br>LiDAR|<font color="Blue">動作確認をしていません。</font>|
|iPad Pro (第5世代)|M1|TrueDepth<br>LiDAR|正常動作を確認済み。|


### Azure Kinect (USB 3接続の専用カメラ - 3teneFREE は非対応)
>深度カメラで体全体を認識し、ボディトラッキングを実現します。
>広さを優先した広角モードと奥行きを優先した狭角など、
>用途に合わせてモードが変更できます。

><font color="Red">※USB 3.x での接続が必須となります。</font>
><font color="Blue">使用するには動作クロックが 3GHz 以上（2GHz では不足。）のＣＰＵと
>NVIDIA 製のグラフィックボード(GPU) GeForce GTX 1070 相当を必要とします。</font>
><font color="Red">※DirectML に対応したＧＰＵでも動作する可能性があります。（未確認）</font>
><font color="Red">※GeForce RTX 3000 シリーズを使用する場合はドライバ R456 以降が必要です。</font>

><font color="Blue">Kinect の Firmware は 1.6.110079014 で確認をしています。</font>

### HTC Vive, Valve Index (VR機器 - 3teneFREE は非対応)
>ゴーグル（頭）、コントローラー（手）×２、室内センサー×２を使って、
>頭と手の位置でモデルを動かします。またモデルの移動が可能になります。
>コントローラーのボタンで表情等を操作する事も可能です。
>トラッカーを３つ追加し、腰、足×２に割り当てると
>全身の動きをモデルに再現する事が可能になります。
>※使用には広い空間(2メートル×2メートル以上)が必要かと思います。

>USB 3.0 と WiFi は干渉します。
>トラッカーを使う場合にはドングルとヘッドセットのケーブルを近づけないでください。

>ベースステーション（室内センサー）は赤外線を使用して動きを検知しています。
>窓からの日光はカーテン等で遮断し、赤外線を発生する装置は設置しないようにしてください。

>#### 動作確認表

|機器名|状況|
|---|:---|
|HTC Vive|正常動作を確認済み。|
|HTC Vive Pro<br>(Base Station 1.0)|正常動作を確認済み。|
|HTC Vive Pro<br>(Base Station 2.0)|正常動作を確認済み。|
|HTC Vive Pro Eye|<font color="Blue">動作確認をしていません。</font>|
|HTC Vive Cosmos|動作すると報告あり。|
|HTC Vive Cosmos Elite|<font color="Blue">動作確認をしていません。</font>|
|HTC Vive Focus Plus|<font color="Red">動作しません。</font>|
|Valve Index|正常動作を確認済み。|

><font color="Blue">HTC Vive Pro はアップグレード、フルセットどちらでも動作します。</font>

>#### Valve Index について
>HTC Vive と同じ構成なのでほぼ同じ用に扱えます。
><font color="Blue">SteamVR のバージョンが古いと動作が不安定になる場合があるようです。</font>


### Oculus Rift (VR機器 - 3teneFREE は非対応)
>ゴーグル（頭）、コントローラー（手）×２、卓上センサー×２を使って、頭と手の位置で
>モデルを動かします。モデルの移動は可能ですが足の完全な制御はできません。
>コントローラーのボタンで表情等を操作する事も可能です。
>※使用には広い空間(2メートル×2メートル以上)が必要かと思います。

>#### 動作確認表

<font color="Red">※Oculus Rift は Windows のみ対応の為、 Mac では動作しません。</font>

|機器名|3tene|
|---|:---|
|Oculus Rift|正常動作を確認済み。|
|Oculus Rift S|<font color="Blue">動作確認をしていません。</font>|
|Oculus Go|<font color="Red">動作しません。</font>|
|Oculus Quest (単体)|<font color="Red">動作しません。</font>|
|Oculus Quest + Oculus Link|<font color="Blue">動作確認をしていません。</font>|
|Oculus Quest2 (単体) |<font color="Red">動作しません。</font>|
|Oculus Quest2 + Oculus Link|<font color="Blue">動作確認をしていません。</font>|
|Oculus Quest2<br>(Oculus Air Link)|正常動作を確認済み。|


### Perception Neuron (全身装着型センサー - 3teneSTUDIO のみ対応)
>顔以外の全身モーションキャプチャが可能。
>指にも対応しています。（Perception Neuron Pro は指に非対応。）
>[Perception Neuronについて](#PerceptionNeuron.md)

>製品の仕様により磁気に弱いという性質があり、
>電気製品などが無い部屋を用意する必要があるかと思います。

>詳しくは<a href="https://neuronmocap.com/node/1589" target="_blank">注意事項 | Perception Neuron by Noitom</a>を参照してください。


><font color="Blue">複数の Perception Neuron は下記２つの方法で使用する事が可能です。</font>

>1. 複数の PC で制御する。
>　Perception Neuron と同じ数の PC を用意してローカルネットワークで
>　Axis Neuron, Axis Neuron PRO, Axis Studio と接続します。
>　※Perception Neuron V2、Perception Neuron PRO などの混合使用も可能です。

>2. １台の PC で制御する。
>　１つの Axis Neuron, Axis Studio で複数の Perception Neuron を認識させる。
>　※Perception Neuron PRO でこの方法は使用できません。
>　※異なる Perception Neuron (V2,PRO,Studio) を混合使用する事はできません。

>#### 動作確認表

<font color="Red">※Axis Studio は 3teneSTUDIO v1.10.20 2020/02/14 以降で対応。</font>

|機器名|Software|3tene|
|---|---|:---|
|PerceptionNeuron|Axis Neuron|正常動作を確認済み。|
|PerceptionNeuron V2|Axis Neuron|正常動作を確認済み。|
|PerceptionNeuron 3|Axis Studio|正常動作を確認済み。|
|PerceptionNeuron Pro|Axis NeuronPro|正常動作を確認済み。|
|PerceptionNeuron Studio|Axis Studio|正常動作を確認済み。|


### 指操作用グローブ (3teneSTUDIO のみ対応)

>指が操作できないボディトラッキングの機器と合わせて使用します。
>※複数の接続は不可。

>#### 動作確認表

|機器名|3tene|
|---|:---|
|Hi5 VR GLOVE|正常動作を確認済み。|
|Hi5 2.0 VR Gloves|正常動作を確認済み。|
|ContactGlove|<font color="Red">動作しません。</font>|

