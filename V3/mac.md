## Mac版の制限

### 初回「開発元が未確認」の警告ダイアログが表示される

>[トラブルシューティング](#troubleshooting.md) の
>「Mac で開発元が未確認と表示され 3tene が起動できません。」
>を参照してください。


### Apple Silicon CPU を搭載した Mac の対応について

>制限として<font color="Red">音声リップシンクが動作しません。</font>
><font color="Blue">※顔認識によるリップシンクは使用可能です。</font>

>●M1 CPU
>3tene V2 ver 2.0.9 2020/12/18 から起動できるようになりました。 

>●M2 CPU
>3tene V2 ver 2.0.20 2022/06/30 から起動できるようになりました。 
>3tene V3 ver 3.0.2 2022/07/01 から起動できるようになりました。 

>もし、起動できない場合は DisableLipSync.txt を
>実行ファイルと同じフォルダに作成してください。
>※音声リップシンクを強制的に無効にします。


### Mac OS 10.15.x (Catalina) の対応について

>3tene v1.10.28 2020/05/22 以降で正式に対応しました。
>古いバージョンの 3tene は動作対象外となります。


### LeapMotion に対応していません

>最新の LeapMotion が Mac に対応していないので使用できません。


### Nuitrack + RealSense に対応していません

>Nuitrack が Mac に対応していないので使用できません。


### VR の対応について

><font color="Red">Mac 版 Steam での正常動作が確認できない為、対象外となります。</font>
>※2022年6月に確認。

><S>HTC Vive のみ対応します。

><font color="Red">※M1 Mac では動作しない可能性があります。</font>

>動作には SteamVR が必須となりますが、
>Valve から 2020年5月に Mac の SteamVR のサポート終了が発表されており、
>3tene での対応、サポートを保証できません。

>2021年の時点で下記に対応していません。
><font color="Red">※HTC Vive Pro、HTC Vive Cosmos</font>
><font color="Red">※Oculus シリーズ</font>
</S>

### Perception Neuron の対応について

>Perception Neuron 3、Studio を動かすのに必要な
>AxisStudio が Mac に対応していない為、使用できません。


### 背景の画面共有には対応していません。

>Windows 専用の画面共有機能を使用している為、使用できません。


### <S>動画保存機能が使えません</S>

><S>画保存があまりにも遅く実用に耐えない為、無効にしています。
>（2018年の端末でも3フレーム程度まで速度が低下します。）
</S>

><font color="Blue">3tene V3 より Mac 版も動画保存が可能になりました。</font>


### 仮想カメラが使えません

>3tene Screen Capture は Mac 未対応の為、使用できません。


### 仮想環境や BootCamp の動作保証はしません

>仮想環境や BootCamp で起動した Windows で
>3tene(Windows版) の正常動作は保証しません。

><font color="Red">※3tene が起動しても対応機器が動作しない可能性があります。</font>

>MacBook で BootCamp を使用して起動した Windows 上の
>FaceTime HD Camera は解像度の問題で使用できないようです。


