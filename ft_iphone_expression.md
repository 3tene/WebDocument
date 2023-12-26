## iPhoneX フェイストラッキングの表情自動変更(表情認識)

### 表情の認識について

>iPhoneX の高精度なフェイストラッキングを使う事で演者の表情を読み取り、
>アバターの表情を「楽しい(Joy)、怒り(Angry)、悲しい(Sorrow)」に変更します。

><font color="Blue">VRoidStudio 以外で作成した VRM モデルは
>VRM 標準の Joy、Angry、Sorrow の表情が存在している必要があります。</font>


### 準備と設定

> 最初に iPhone でフェイストラッキングが動作する事を確認してください。
>[iPhoneXによるフェイストラッキングについて](#ft_iphone.md)

>アバター調整 → 「顔」タブ → 「表情自動実行」にチェックを付けます。

![画像](image/iphonex_ft_expression_01.png "設定")


### 認識具合を確認する

>iPhoneX フェイストラッキングを開始します。

>表情認識は下記を<font color="Blue">意識して表情を作る</font>と操作しやすくなります。

><font color="Blue">Joy → 広角を広げる</font>
><font color="Blue">Angry → まゆげを下げる</font>
><font color="Blue">Sorrow → まゆげを上げる</font>

>認識がうまく行われない場合は感度を変更する事で改善します。

![画像](image/iphonex_ft_expression_02.png "設定")


### 自動表情変更と口の動きの競合について

>自動表情変更が有効な状態で口を動かすと
><font color="Red">表情の口設定と競合して正常な口の形状にならない</font>場合があります。
>（VRM モデルの作り方によって影響度が違います。）


><font color="Blue">VRoidStudio で作成したモデルに対しては対策を行っている</font>ので競合は起きませんが、
>モデリングソフトで独自に作成した VRM モデルはこの問題の対象となります。


### 独自の VRM モデルで競合を回避する方法

>自動表情変更で使用する表情のカスタム設定をVRMに追加します。
>Unity で VRM に下記の名前の BlendShape を追加する事によって競合を回避可能となります。
>また、自動表情変更で使用する表情をカスタムしたい場合も下記の名前で BlendShape を作成してください。
>(作成した BlendShape が優先となります。)

>3tene 拡張の [口閉じ版の作り方](#MakeVRM_3.md)を参照してください。

