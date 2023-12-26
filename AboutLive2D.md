## Live2Dについて

>3tenePro+Live2D 版のみ、Live2D Cubism で作成されたモデルデータを読み込めます。

### 対応機材の制限

>Live2D モデルの操作はフェイストラッキング(ウェブカメラ、iPhoneX以降)に対応しています。
>腕の操作にも対応していますが<font color="Blue">下記に記載の専用パラメータ対応モデルと対応機器</font>が必要です。
>対応機器は LeapMotion と<font color="Blue">ウェブカメラ(ハンドトラッカー)</font>になります。
><font color="Red">※VR や Nuitrack など、全身制御には対応していません。</font>


### Live2D モデルのファイル構成

>3tene で Live2D のモデルを作成する場合は下記の構成にする必要があります。
>・モーションデータ → <font color="Blue">motions フォルダ (.motion3.json ファイルを置く。)</font>
>・表情データ → <font color="Blue">expressions フォルダ (.exp3.json ファイルを置く。)</font>


### Live2D のパラメータID

>3tenePro+Live2D で使用しているパラメータ ID は下記になります。

#### 呼吸

|名前|ID（Cubism3）|ID（Cubism2）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
|呼吸|ParamBreath|PARAM_BREATH|0|0|1|+で呼吸の動き|

#### フェイストラッキング

|名前|ID（Cubism3）|ID（Cubism2）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
|角度X|ParamAngleX|PARAM_ANGLE_X|-30|0|30|+で画面の右を向く|
|角度Y|ParamAngleY|PARAM_ANGLE_Y|-30|0|30|+で画面の上を向く|
|角度Z|ParamAngleZ|PARAM_ANGLE_Z|-30|0|30|+で画面の右を向く|
|左目 開閉|ParamEyeLOpen|PARAM_EYE_L_OPEN|0|1|1|+で目を開ける|
|右目 開閉|ParamEyeROpen|PARAM_EYE_R_OPEN|0|1|1|+で目を開ける|
|目玉 X|ParamEyeBallX|PARAM_EYE_BALL_X|-1|0|1|+で右を見る|
|目玉 Y|ParamEyeBallY|PARAM_EYE_BALL_Y|-1|0|1|+で上を見る|
|左眉 上下|ParamBrowLY|PARAM_BROW_L_Y|-1|0|1|+で眉を上げる|
|右眉 上下|ParamBrowRY|PARAM_BROW_R_Y|-1|0|1|+で眉を上げる|
|口 開閉|ParamMouthOpenY|PARAM_MOUTH_OPEN_Y|0|0|1|+で口を開く|
|体の回転 X|ParamBodyAngleX|PARAM_BODY_ANGLE_X|-10|0|10|+で画面の右を向く|
|体の回転 Z|ParamBodyAngleZ|PARAM_BODY_ANGLE_Z|-10|0|10|+で画面の右に傾く|

#### 母音リップシンク

|名前|ID（Cubism3）|ID（Cubism2）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
|口 あ|ParamMouthA (or ParamA)|-|0|0|1|+口を「あ」の形にする|
|口 い|ParamMouthI (or ParamI)|-|0|0|1|+口を「い」の形にする|
|口 う|ParamMouthU (or ParamU)|-|0|0|1|+口を「う」の形にする|
|口 え|ParamMouthE (or ParamE)|-|0|0|1|+口を「え」の形にする|
|口 お|ParamMouthO (or ParamO)|-|0|0|1|+口を「お」の形にする|

#### パーフェクトシンク

ID① と ID② の両方が存在する場合は ID① の「Param〇〇」が優先されます。
該当のパラメータが存在しない場合は同パラメータは動作しません。
各パラメータの詳細につきましては[こちら](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation)をご確認ください。

|カテゴリ|ID①（Cubism3）|ID②（Cubism3）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
|左目|ParamEyeBlinkLeft|EyeBlinkLeft|0|0|1|左まぶたの閉じ具合|
|左目|ParamEyeLookDownLeft|EyeLookDownLeft|0|0|1|下向きの視線と一致する左まぶたの動き|
|左目|ParamEyeLookInLeft|EyeLookInLeft|0|0|1|右向きの視線と一致する左まぶたの動き|
|左目|ParamEyeLookOutLeft|EyeLookOutLeft|0|0|1|左向きの視線と一致する左まぶたの動き|
|左目|ParamEyeLookUpLeft|EyeLookUpLeft|0|0|1|上向きの視線と一致する左まぶたの動き|
|左目|ParamEyeSquintLeft|EyeSquintLeft|0|0|1|左目の周りの顔の収縮|
|左目|ParamEyeWideLeft|EyeWideLeft|0|0|1|左目の周りのまぶたの広がり|
|右目|ParamEyeBlinkLeft|EyeBlinkLeft|0|0|1|左まぶたの閉じ具合|
|右目|ParamEyeLookDownLeft|EyeLookDownLeft|0|0|1|下向きの視線と一致する右まぶたの動き|
|右目|ParamEyeLookInLeft|EyeLookInLeft|0|0|1|右向きの視線と一致する右まぶたの動き|
|右目|ParamEyeLookOutLeft|EyeLookOutLeft|0|0|1|左向きの視線と一致する右まぶたの動き|
|右目|ParamEyeLookUpLeft|EyeLookUpLeft|0|0|1|上向きの視線と一致する右まぶたの動き|
|右目|ParamEyeSquintLeft|EyeSquintLeft|0|0|1|右目の周りの顔の収縮|
|右目|ParamEyeWideLeft|EyeWideLeft|0|0|1|右目の周りのまぶたの広がり|
|顎|ParamJawForward|JawForward|0|0|1|下顎の前方への動き|
|顎|ParamJawLeft|JawLeft|0|0|1|下顎の左方向への動き|
|顎|ParamJawRight|JawRight|0|0|1|下顎の右方向への動き|
|顎|ParamJawOpen|JawOpen|0|0|1|下顎の開口部|
|口|ParamMouthClose|MouthClose|0|0|1|顎の位置とは無関係の唇の閉じ具合|
|口|ParamMouthFunnel|MouthFunnel|0|0|1|両唇が開いた形状の収縮|
|口|ParamMouthPucker|MouthPucker|0|0|1|閉じた両方の唇の収縮|
|口|ParamMouthLeft|MouthLeft|0|0|1|両方の唇をの左方向への動き|
|口|ParamMouthRight|MouthRight|0|0|1|両方の唇をの右方向への動き|
|口|ParamMouthSmileLeft|MouthSmileLeft|0|0|1|左口角の上方向の動き|
|口|ParamMouthSmileRight|MouthSmileRight|0|0|1|右口角の上方向の動き|
|口|ParamMouthFrownLeft|MouthFrownLeft|0|0|1|左口角の下方向の動き|
|口|ParamMouthFrownRight|MouthFrownRight|0|0|1|右口角の下方向の動き|
|口|ParamMouthDimpleLeft|MouthDimpleLeft|0|0|1|左口角の後方への動き|
|口|ParamMouthDimpleRight|MouthDimpleRight|0|0|1|右口角の後方への動き|
|口|ParamMouthStretchLeft|MouthStretchLeft|0|0|1|左口角の左方向への動き|
|口|ParamMouthStretchRight|MouthStretchRight|0|0|1|右口角の右方向への動き|
|口|ParamMouthRollLower|MouthRollLower|0|0|1|下唇の内側への動き|
|口|ParamMouthRollUpper|MouthRollUpper|0|0|1|上唇の内側への動き|
|口|ParamMouthShrugLower|MouthShrugLower|0|0|1|下唇の外側への動き|
|口|ParamMouthShrugUpper|MouthShrugUpper|0|0|1|上唇の外側への動き|
|口|ParamMouthPressLeft|MouthPressLeft|0|0|1|下唇左側の上方向への圧縮|
|口|ParamMouthPressRight|MouthPressRight|0|0|1|下唇右側の上方向への圧縮|
|口|ParamMouthLowerDownLeft|MouthLowerDownLeft|0|0|1|下唇左側の下方向への動き|
|口|ParamMouthLowerDownRight|MouthLowerDownRight|0|0|1|下唇右側の下方向への動き|
|口|ParamMouthUpperUpLeft|MouthUpperUpLeft|0|0|1|上唇左側の上方向への動き|
|口|ParamMouthUpperUpRight|MouthUpperUpRight|0|0|1|上唇右側の上方向への動き|
|眉|ParamBrowDownLeft|BrowDownLeft|0|0|1|左眉外側の下方向への動き|
|眉|ParamBrowDownRight|BrowDownRight|0|0|1|右眉外側の下方向への動き|
|眉|ParamBrowInnerUp|BrowInnerUp|0|0|1|両眉内側の上方向への動き|
|眉|ParamBrowOuterUpLeft|BrowOuterUpLeft|0|0|1|左眉外側の上方向への動き|
|眉|ParamBrowOuterUpRight|BrowOuterUpRight|0|0|1|右眉外側の上方向への動き|
|頬|ParamCheekPuff|CheekPuff|0|0|1|両頬の外側への動き|
|頬|ParamCheekSquintLeft|CheekSquintLeft|0|0|1|左目周囲および下頬の上方向への動き|
|頬|ParamCheekSquintRight|CheekSquintRight|0|0|1|右目周囲および下頬の上方向への動き|
|鼻|ParamNoseSneerLeft|NoseSneerLeft|0|0|1|鼻孔周囲の鼻の左側の隆起|
|鼻|ParamNoseSneerRight|NoseSneerRight|0|0|1|鼻孔周囲の鼻の右側の隆起|
|舌|ParamTongueOut|TongueOut|0|0|1|舌の伸び|

※EyeBlinkLeft, EyeBlinkRight に限りパラメータが存在しない場合は
ParamEyeLOpen(PARAM_EYE_L_OPEN), ParamEyeROpen(PARAM_EYE_R_OPEN)を参照します。

#### モーション、LeapMotion（3tene用パラメータ）

|名前|ID（Cubism3）|ID（Cubism2）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
左腕 X|ParamArmLX|–|-30|0|30|+で左腕を閉じる|
左腕 Y|ParamArmLY|–|-30|0|30|+で左腕を上げる|
右腕 X|ParamArmRX|–|-30|0|30|+で右腕を閉じる|
右腕 Y|ParamArmRY|–|-30|0|30|+で右腕を上げる|

#### LeapMotion（3tene用パラメータがない場合）

|名前|ID（Cubism3）|ID（Cubism2）|最小|基準|最大|説明|
|---|:---|:---|:---|:---|:---|:---|
|左腕 A|ParamArmLA|–|-10|0|10|+で左腕を広げる|
|右腕 A|ParamArmRA|–|-10|0|10|+で右腕を広げる|

### Live2D のモデルで母音によるリップシンクを使用するには

>3tene で母音によるリップシンクを使用するには上記記載の「母音リップシンク」のパラメータが必要になりますので
>ご利用の場合は該当モデルにパラメータを追加して 3tene への読み込みをお願いいたします。
>アバターの調整 - 設定 - 母音リップシンクを使用する にチェックを入れ、リップシンクを開始すると
>同パラメータを利用してリップシンクを行います。
>※パラメータが存在しない場合は動作しません。


### Live2D のモデルで腕を動かすには

>3tene で動かす為には専用パラメータをモデルに組み込む必要があります。

<iframe src="https://www.youtube.com/embed/mBKb4ThyR44" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" width="576" height="324" />

>動画内誤字について
><font color="Red">誤　ループパラメータ</font>
><font color="Blue">正　ループ用パラメータ</font>

>また、3tenePro+Live2Dに同梱されている「みとね」のLive2Dモデルは
>こちらの手順で作成したものになりますので、参考にしてみてください。

>ループ用パラメータを使用し、腕を回転させるイメージで作成しています。
>それぞれの方向にそれぞれのイラストを用意し、キーフレームを打つことで表示が切り替わる様に作成しています。

>前腕から手まで6つのイラストを作成します。
>ループ用パラメータを設定するために「右腕X」と「右腕Y」を作成。

>それぞれの腕の表示を切り替えるためにキーを下記のようにそれぞれを設定。
>右腕1
>パラメータ右腕Yに-30から-15、右腕Xに-30から0
>右腕2
>パラメータ右腕Yに-14から+14、右腕Xに-30から0
>右腕3
>パラメータ右腕Yに+15から+30、右腕Xに-30から0
>右腕4
>パラメータ右腕Yに+15から+30、右腕Xに+1から+30
>右腕5
>パラメータ右腕Yに-14から+14、右腕Xに+1から+30
>右腕6
>パラメータ右腕Yに-30から-15、右腕Xに+1から+30

>腕の切り替え部分で腕が表示されない、2本表示されるという現象が起こるので、不透明度の設定を行います。

>例：右腕1と右腕2
>右腕1
>右腕Yの表示範囲は-30から-15。-14へキーを打ち、不透明度を0。
>右腕２
>右腕2の表示範囲は-14から+14。-15と+15に不透明度0。

>例：右腕2と右腕5
>右腕2の右腕Y-14、右腕X+1.0の地点キーを打つ。
>+14の地点にも自動でキーが打たれるので、追加された位置のY-14、+14、X+1の地点に不透明度を0。
>右腕5にも同様の設定を行う。

>不透明度を設定していないキーが幾つか打たれているのでそれぞれ設定する。
>例：右腕１
>右腕Y-15、右腕X0は不透明度100
>右腕Y-14、右腕X0は不透明度0
>右腕Y-14、右腕X1も不透明度0
>右腕Y-15、右腕X1も不透明度0

>この設定を他の腕全てに設定する。

>右腕の回転
>ループ用パラメータの四隅にキーを設定。

>パラメータとIDの設定
>現在0に設定されてる腕は、腕2なので、デフォルト設定値に戻すと、腕2が表示されます。
>今回は右腕1をデフォルトの腕としたいと思いますので、パラメータの設定から基準値を-30へ変更しています。
>それぞれのパラメータは下記の通りです。
>右腕X：ParamArmRX
>右腕Y：ParamArmRY
>左腕X：ParamArmLX
>左腕Y：ParamArmLY

>書き出して3tenePro+Live2Dから読み込む。


