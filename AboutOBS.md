## OBS との連携について

>3tene と OBS を組み合わせて使う事での録画や動画配信を行う事が可能です。

>下記サイトより OBS をダウンロードします。

>OBS (OBS Studio)
>https://obsproject.com/ja

>※<font color="Blue">OBS Ver 29.1.0 以降</font>で映像キャプチャの一覧に
>　<font color="Red">3tene ScreenCapture が表示されない場合は 3tene v3.0.8 以降への更新が必要です。</font>
>　<font color="Blue">もしくは OBS を Ver 29.0.2 に戻してください。</font>

>OBS の旧バージョンはこちらから
>https://github.com/obsproject/obs-studio/releases


### OBS のキャプチャ方法を決定する

>・Windows で OBS の映像キャプチャを利用する場合は
>　 [仮想ウェブカメラ 3tene Screen Capture](#VirtualWebCamera.md) を使用します。

>・Windows でウインドウをそのまま取り込む場合は<font color="Blue">ゲームキャプチャ</font>を使用してください。

>・Mac で使う場合は<font color="Blue">ウインドウキャプチャ</font>を使用してください。

>・NDI は Windows, Mac どちらでも使用可能ですが OBS に追加プラグインが必要です。


#### 注意事項

><font color="Blue">・3tene Steam 版</font>で<font color="Blue"> OBS の映像キャプチャを利用するには手動登録</font>が必要になります。
>　[仮想カメラ 3tene Screen Capture](#VirtualWebCamera.md) を参照して手動設定してください。

><font color="Blue">・3tene v2.0.6 2020/10/12 以降で映像キャプチャを使う</font>場合は
>　ウェブカメラ一覧で<font color="Blue">「3tene Screen Capture」を選択</font>してください。
>　<font color="Red">「Unity Video Capture」</font>は使用されなくなりました。
>　<font color="Blue">※旧バージョンの 3tene では UnityCapture を使用します。</font>

><font color="Blue">・3tene v1.10.20 2020/02/14 以降で OBS を使う</font>場合は
>　Windows 版は<font color="Green">ウインドウキャプチャ</font>ではなく<font color="Red">ゲームキャプチャ</font>を使用してください。
>　Mac 版は<font color="Red">ウインドウキャプチャ</font>を使用してください。


### OBS を管理者権限で起動して利用する場合について

>Windows10 において負荷分散が変化するという事で
><font color="Blue">OBS を管理者権限で起動して使用する方法</font>がありますが、
>その場合には <font color="Blue">3tene も管理者権限で起動</font>していないと
><font color="Red">OBS で 3tene ScreenCapture が選択できなくなります。</font>


### OBS の設定 (映像キャプチャ)

>OBS の「ソース」の追加で「映像キャプチャデバイス」を選択します。
>新規作成で任意の名前を入力し「OK」をクリックします。
>デバイスの選択欄で「3tene Screen Capture」を選択し、「OK」を
>クリックすると 3tene の画面が表示され録画が可能になります。

![画像](image/obs_02.png "")


### OBS の設定 (ゲームキャプチャ)

>OBS の「ソース」の追加で「ゲームキャプチャ」を選択します。
>新規作成で任意の名前を入力し「OK」をクリックします。

>モードを「特定のウインドウをキャプチャ」に変更し、
>ウィンドウで 3tene を選択し、「OK」を
>クリックすると 3tene の画面が表示され録画が可能になります。

![画像](image/obs_01.png "")


### OBS の設定 (ウインドウキャプチャ)

>OBS の「ソース」の追加で「ウインドウキャプチャ」を選択します。
>新規作成で任意の名前を入力し「OK」をクリックします。

>ウィンドウから 3tene を選択し、「OK」を
>クリックすると 3tene の画面が表示され録画が可能になります。

![画像](image/obs_03.png "")

>Windows でウインドウキャプチャを使う場合は
>「Windows Graphics Capture」を選択すると動作する可能性はありますが保証外となります。

>macOS Catalina (10.15.x)で OBS を起動すると
>ウインドウキャプチャに 3tene が現れない場合があります。

>ウインドウキャプチャの「空の名前でウインドウを表示」にチェック、
>追加された項目を選択して<font color="Red">「画面収録」の許可(権限の設定)</font> を
>行うと 3tene が一覧に現れると思います。

>macOS Catalina および Big Sur では<font color="Red">権限許可</font>が必要です。
>![画像](image/obs_04.png "")


### OBS の設定 (NDI)

>最初に OBS 用の NDI プラグインをダウンロードし、インストールを行います。
>[https://github.com/Palakis/obs-ndi/releases](https://github.com/Palakis/obs-ndi/releases)

>OBS の「ソース」の追加で「NDI　output」を選択します。
>NDI の送信側で設定したソース名称を入力します。
>新規作成で任意の名前を入力し「OK」をクリックします。

