## LeapMotionについて

>専用センサーで腕、手、指を動かします。

><font color="Red">VR や AzureKinect 等、他の体を操作する機器との併用はできません。</font>

### LeapMotion 専用ソフトウェアの注意事項

>LeapMotion を使用するには<font color="Blue">専用ソフトウェア</font>が必須となっています。

><font color="Red">※Ultraleap Hand Tracking Software (GEMINI) Ver 5.2 以降を使用する場合は</font>
>　<font color="Blue">3tene v2.0.18 以降</font><font color="Red">が必要です！！</font>

|名称|LeapMotion v5.2|LeapMotion v5.0|LeapMotion v4.x|
|:---|---|---|---|
|3tene v2.0.18 以降|○|×|×|
|3tene v2.0.17 以前|×|○|○|

><font color="Blue">3tene v2.0.18 以降は v5.2 で動作します</font>が、<font color="Red">v5.0 および v4.x では動作しません。</font>
><font color="Blue">3tene v2.0.17 以前</font>は <font color="Red">v5.2 で動作しません。</font><font color="Blue">v5.0 および v4.x にて動作します。</font>


### 新 LeapMotion ソフトウェア(v5.2 以降)のインストール

><a href="https://developer.leapmotion.com/vr-setup" target="_blank">公式サイト</a>より Ultraleap_Tracking_Installer_5.2.0_win64.exe をダウンロードします。

><font color="Red">※ダウンロードするにはログインが必要です。</font>

>ダウンロード完了後、インストールしてください。

><font color="Blue">インストール完了後、Leap Motion ソフトウェアを起動します。</font>

 ![画像](image/leapmotion_v5_2_1.png)

>Allow Images にチェックを付けます。
>3tene で撮影映像が表示可能になります。

 ![画像](image/leapmotion_v5_2_2.png)

><font color="Blue">※「トラッキングの向きの自動調整」が無くなったので手動設定が必要です。</font>
>使用環境に合わせて LeapMotion の認識向きを指定します。
>・default 向きを変えずにそのまま使用します。
>・Reversed 向きを逆にして使用します。


### 旧 LeapMotion ソフトウェア(v4.1 以前)のインストール

><a href="https://developer.leapmotion.com/vr-setup" target="_blank">公式サイト</a>より Leap_Motion_Setup_4.0.0.exe をダウンロードします。
>(もしくはLeap_Motion_Installer_v4-2020-release-updates_public_win_x64_4.1.0+52211_ah1889.exe)

><font color="Red">※ダウンロードするにはログインが必要です。</font>
><font color="Red">※「V2 (Legacy Desktop Apps)」では動作しないので注意してください。</font>

>ダウンロード完了後、インストールしてください。

><font color="Blue">インストール完了後、Leap Motion ソフトウェアを起動します。</font>


 ![画像](image/leap_setup_1.png)
>3tene で使用するには<font color="Blue">ソフトウェア バージョンが 4.0 以降</font>になっている必要があります。

 ![画像](image/leap_setup_2.png)
>正しく接続されていると<font color="Green">全てのステータスが緑で表示</font>されます。
>・Service Status → LeapMotion ソフトウェアが正常に動作している。
>・Device Status → LeapMotion が USB 接続で正常に接続され動作している。
>・Smudge Status → LeapMotion のセンサーに汚れが無く正常に動作している。

 ![画像](image/leap_setup_3.png)
>3tene で<font color="Blue">センサー映像を確認できるようにする為に「イメージを許可する」を有効</font>にしてください。

>環境によっては「ロバストモード」の有効無効で認識精度が変わる場合があるので
>切り替えて試してみる事をお勧めします。


### LeapMotion の認識範囲

 >LeapMotion の認識範囲は中心角110°、半径50cmの範囲となっておりますので、
 >LeapMotion を使用する場合は、範囲内でのご利用をお願いいたします。

 ![画像](image/leapmotion1.png)

### LeapMotion の使用モードの切り替え

>設定 - システム - LeapMotionの操作方法 - モード から「デスクトップモード」「ヘッドマウントモード」を変更することが出来ます。
><font color="Red">※モード変更のドロップダウンを変更後、同ドロップダウンが再びアクティブになった際にモード変更が完了します。</font>

<img src="image/leapmotion2.jpg" width="600px">

>#### デスクトップモード
><font color="Blue">膝</font>もしくは<font color="Blue">机の上</font>に LeapMotion を置き、その上で腕を動かします。
><font color="Red">※机の上だと位置が高く、センサーの範囲内に手を収めるのが難しい場合があります。</font>

>#### ヘッドマウントモード
>ヘッドセット前面に LeapMotion を配置し、顔の前で腕を動かします。
>※ネックマウント等を使用した使い方はヘッドマウントモードになります。

### 3teneでの使用方法

> LeapMotion のソフトウェアがインストールされているのを確認してください。

> 1. LeapMotion を USB ケーブルで PC に接続します。
> 2. 3tene が Leap Motion を認識すると LeapMotion のアイコンがアクティブになります。
>    アイコンをクリックすると LeapMotion のカメラ映像が表示されます。
> 3. アバターの調整 → 設定 → アバターの操作方法 を「LeapMotion」に変更し、動作を確認します。
> 4. アバターの調整 → 体 → LeapMotion の項目を動きを見ながらそれぞれを調整します。


### ボディトラッキングを開始する (3tene V2 以降)

>右側メニューのトラッキング開始のアイコンをクリックして
>トラッキング開始のウインドウを表示します。
>全身操作の開始ボタンをクリックするとトラッキングが開始されます。


![画像](image/leapmotion3.png "")


### 既知の不具合

>アバターの調整 → 顔 → 映り方 が「鏡」の場合、LeapMotionの動きがモデルの腕に上手く反映されない不具合があります。
>「シンクロ」での利用をお願いします。
