## 仮想ウェブカメラについて

>3tene の画面を仮想ウェブカメラに出力します。
>メニューやウェブカメラプレビュー等の2D画像は出力されません。

### 注意事項

><font color="Red">※Steam 版はインストーラが無いので仮想ウェブカメラが自動登録されません。</font>
>　下記の<font color="Blue">「3tene Screen Capture」の再登録の仕方</font>を参照してください。
><font color="Red">※Mac版は対応していません。</font>

>3tene Ver 2.0.6 以降は UnityCapture を使用しなくなりました。
>旧バージョン(Ver 2.0.5 以前)の[UnityCapture設定](#UnityCapture.md)

>UnityCapture がインストール済みの場合はインストールされたフォルダにある
>Uninstall.bat を実行後、ファイルを削除する事でアンインストールされます。

>3tene インストール後に 3tene のフォルダを移動すると
><font color="Red">「3tene Screen Capture」が動作しなくなります。</font>
>この問題を解決するには、フォルダを元に戻すか、
>手動による<font color="Blue">「3tene Screen Capture」の再登録</font>が必要になります。

### 仮想ウェブカメラの特徴

>ウェブカメラ対応のソフトウェアに 3tene の画面を表示させる事が可能になります。
>OBS (配信ソフト)や、ZOOM（ミーティングソフト）等、いろいろな用途に使えます。

><font color="Blue">ウェブカメラ一覧で「3tene Screen Capture」を選択してください。</font>

>また、仮想ウェブカメラに出力される画像は 3tene 画面内にあるメニューやウインドウが
>対象とならないのでアバターと背景のみが表示されます。

![画像](image/VwcForOBS.png "")

### 「3tene Screen Capture」の再登録の仕方

>3tene のインストールされたフォルダの中に
>「3teneScreenCapture」フォルダがあるので開きます。
><font color="Blue">C:\Program Files\PLUSPLUS\3tene〇〇〇</font>

><font color="Blue">Steam 版のデフォルトのインストールフォルダは下記になります。
>C:\Program Files (x86)\Steam\SteamApps\Common\3tene\3tene</font>
>※Steam のインストール方法や設定によっては異なる場合があります。

>フォルダの中にある「install.bat」を右クリックして、「管理者として実行」を実行します。
><font color="Blue">※Windows の保護が表示された場合は「詳細情報」をクリック後、
>「実行」を選択してください。</font>

>「デバイスの変更の許可」が表示されるので「はい」を選択してください。

![画像](image/Vwc_Agreement.png "")

>登録成功が表示されエラーが出なければ登録完了です。

>3tene の画面が「3tene Screen Capture」に出力されるようになります。


### 仮想ウェブカメラを OBS で使用する

>下記サイトより OBS をダウンロードします。

>OBS (OBS Studio)
>https://obsproject.com/ja

>インストールを行い、OBS を起動します。
>「ソース」の追加で「映像キャプチャデバイス」を選択します。
>新規作成で任意の名前を入力し「OK」をクリックします。
>デバイスの選択欄で「3tene Screen Capture」を選択し、「OK」を
>クリックすると 3tene の画面が表示され録画が可能になります。

![画像](image/Vwc_Select.png "")


### 「3tene Screen Capture」のソフトウェア相性について

>仮想ウェブカメラは OBS と ZOOM にて動作確認をしていますが、
>一部のウェブカメラ対応ソフトではウェブカメラとして認識せず、
>「3tene Screen Capture」が表示されない可能性があります。
>※認識しない場合はウェブカメラ対応ソフトに問い合わせてください。


