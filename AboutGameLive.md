## ゲーム実況について

>Windows 環境で <font color="Blue">3tene とゲーム等の別アプリを組み合わせて実況</font>を行う場合の設定です。

>ゲームは処理負荷が高い場合がほとんどなのでグラフィックボード(GPU) が
>追加されている事を前提とします。

>※<font color="Blue">上級者レベルのＰＣ知識が必要</font>となりますので注意してください。
>　<font color="Red">設定の変更は自己責任でお願いします。</font>


### 発生する問題

>Direct3D を使うアプリ（3teneやゲーム）を複数起動すると
><font color="Red">アクティブなウインドウが優先して処理される</font>為、ゲームを操作するリアルタイムの実況では
>3tene のフレームレートが低下する可能性が高くなります。

>この <font color="Blue">3tene のフレームレート低下を設定変更で最低限</font>に抑えます。


### GPU 設定の変更

>追加されたグラフィックボード(GPU) だけでなく、<font color="Blue">ＣＰＵに内蔵されたＧＰＵ (iGPU) も使用します。</font>

>ＣＰＵに内蔵されたＧＰＵ (iGPU) はグラフィックボードを追加すると
>無効になってしまうので <font color="Blue">UEFI (BIOS) で無効にならないように変更する</font>必要があります。

>※メーカーやマザーボードによっては UEFI に該当する項目が無かったり
>　名称が異なっている場合があるのでしっかり確認してください。

>![画像](image/GameLive_01.png "")

>UEFI の設定が正しく行われるとデバイスマネージャーの
>「ディスプレイ アダプター」に両方の GPU が表示されます。

>![画像](image/GameLive_02.png "")


### アプリ設定

><font color="Blue">Windows7 や古いバージョンの Windows 10 は対象外となります。</font>

>※3tene を起動している場合は必ず終了してから行ってください。


>デスクトップを右クリックして「ディスプレイ設定」をクリック。
>下にスクロールして「グラフィックの設定」をクリック。

>「基本設定を指定するアプリを選択します」を「デスクトップ アプリ」に設定。
>「参照」をクリックしてインストールされた 3tene を選択します。

>![画像](image/GameLive_03.png "")

>追加された 3tene.exe の「オプション」を選択します。
>「省電力」を選択します。(iGPU を選択する。)
>※「高パフォーマンス」は追加したグラフィックボードになっているハズです。

>![画像](image/GameLive_04.png "")

>この状態で 3tene と組み合わせたいゲームを起動して
>3tene は GPU 0 → ＣＰＵに内蔵されたＧＰＵ (iGPU)
>ゲームは GPU 1 → グラフィックボード (GPU)
>となっているかをタスクマネージャーで確認します。

>![画像](image/GameLive_05.png "")

>スクウェア・エニックス様の
><a href="http://benchmark.finalfantasyxv.com/jp/" target="_blank">FINAL FANTASY XV BENCHMARK</a>
>を使用させて頂きました。

### OBS の設定

>処理する GPU を分けるとゲームキャプチャで
>両方の画面をキャプチャできなくなるようなので

>3tene → ウインドウキャプチャ
>ゲーム → ゲームキャプチャ

>のように設定を行います。

>映像キャプチャ（3tene の仮想ウェブカメラ）でも動作しますが<font color="Blue">フレームレートの落ちが激しい</font>ので
>「3tene Screen Capture に映像を出力する」をオフにした後に <font color="Red">PC を再起動します。</font>
><font color="Blue">※3tene の再起動だけではフレームレート低下が直らない場合があります。</font>

>PC 再起動完了後、OBS の「ウインドウキャプチャ」に 3tene を設定します。
><font color="Blue">必ず「キャプチャ方法」を「Windows 10 (1903以降)」に変更してください。</font>
><font color="Red">※「キャプチャ方法」が「自動」のままだと OBS が正常に取り込めません。</font>

>対応環境であれば Windows なら Spout、Mac なら Syphon を使った方が
>PC にかかる負荷が少なくなります。
><font color="Blue">※Spout を使う場合は OBS に Spout プラグインを追加する必要があります。</font>

>![画像](image/GameLive_06.png "")

>この状態だとゲームのウインドウがアクティブなっていても
>3tene のフレームレートはほぼ下がらなくなります。
>※ただしＣＰＵに内蔵されたＧＰＵ (iGPU)の性能に依存します。


### FINAL FANTASY XV BENCHMARK の数値 (参考)

>ベンチマーク設定：軽量品質、1280x720、ウインドウ
>PC：Core i7-4770 + GeForce GTX 1050 Ti
><font color="Blue">※BENCHMARK のウインドウをアクティブにして測定。</font>

>BENCHMARK のみ実行 → 7550 快適
>BENCHMARK + 3teneFREE + OBS を実行 → 6817 快適 (3tene は 57～60 fps)



