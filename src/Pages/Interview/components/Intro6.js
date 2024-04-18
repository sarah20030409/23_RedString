import React from 'react'
import Fade from 'react-reveal/Fade';


import MBG3 from '../../../Img/About_Line2.webp'
import MBG1 from '../../../Img/About_Line1.png'

import commentaryImg2 from '../../../Img/Interview/InterImg2.webp'

const Intro6 = () => {
  return (
    <>
    <div className='intro1-flex intro1' style={{backgroundImage:`url(${MBG3})`}}>
      <div className='BG_Img2' style={{backgroundImage:`url(${MBG1})`}}>
      <div className='intro1-wrap'>
        {/* 講評2的文章 */}
        {/* 第一段 */}
        <div data-aos="fade-right" className='interviewer'><p>文章：林捷妤</p></div>
        <div data-aos="fade-up" className='article article_1 article_wrap'>
          <img src={commentaryImg2} />
          <h2><Fade bottom cascade>23屆赤弦獎<br/>
          大專演奏組、大專創作組 </Fade></h2>
        </div>
        
        {/* 第二段 */}
        <div data-aos="fade-up" className='article article_2'>
          <p>有幸邀請到林鴻宇老師、張仲麟老師及葉世康老師擔任本次赤弦獎的初賽評審。在大專演奏組及大專創作組的部分，針對演奏組，評審老師們讚許參賽者跟以往比較起來，在選曲、以及段落選擇上都有了很大的進步。<br/><br/>
          在大專創作組方面，評審老師們表示創作是一件很主觀的事，張仲麟老師說道：「創作組是最不好評，但也是讓我最享受的一個部分。聆聽創作曲對我們來說是一個沈浸式的感受。創作這件事情無法比較，也無法用分數量化。比賽比得是現代流行樂框架下的好作品。」而每個人感受音樂的方式也不一樣，評審老師們要在眾多作品之中，挑選出相較有感的是一件不容易的事情。會入圍的作品也一定有它值得學習的地方。評審老師們也鼓勵創作者把比賽當作是一場演出、當作一場發表會，真正地享受在分享音樂作品的過程中。</p>
        </div>

        {/* 第三段 */}
        <div data-aos="fade-up" className='article article_3'>
          <h2>基本功的琢磨</h2>
          <p>針對演奏組，張仲麟老師提到：「這幾年參賽者的指彈有越來越進入狀況，器材部分也有越來越好。但在認識自己的器材方面也要有相對的進步。」同時，評審老師建議參賽者在彈奏上對於音色的呈現與掌控度，都可以再多多鑽研。林鴻宇老師也提到：「演奏組的部分，基本功若是沒練好，中間出差錯或是段落趕拍的部分就會比較明顯。」
葉世康老師給予演奏組幾個重點提醒——首先是音色的呈現，「沒有調好音是大罪，演奏曲也是音樂的表演者，不是因為彈演奏就可以容納這些出錯的地方。調音一定要調好，所有的走音都會讓人出戲，若左手沒壓好也會走音、以及右手指甲觸弦若是太淺也會影響音色。」老師提點調音的準確度是首要關鍵。調好音的同時，左手及右手也要能夠彼此配合，彈奏出完美的曲子。接下來是拍子的問題——「比賽裡會更加看重節奏感重的歌，不會因為歌曲難易度而有評分標準上的偏心，吃重拍子的歌更應該放慢處理，細節才能被完善地呈現出來。」
音樂是環環相扣的，在樂器上、在技巧上、在細節裡。需要透過不斷的練習與長時間的付出，才能有所收穫。而表演更是不容易，除了音樂上的實力，還要有面對舞台的勇氣。評審老師們不斷的勉勵參賽者，基本功的實力打穩後，再經由比賽過程的經驗累積，從中摸索細節的拿捏是不可或缺的。
</p>
        </div>

        {/* 第四段 */}
        <div data-aos="fade-up" className='article article_4'>
          <h2>音符以及旋律的呈現</h2>
          <p>針對大專演奏組、大專創作組，評審老師們多次強調：「核心應該是旋律線的表現。」旋律線是否清晰、節奏與律動有沒有掌握好，以及在和聲的進行、和弦的拼湊以及旋律的表現與主題是否呼應，都是參賽者需要再好好琢磨的。
葉世康老師針對旋律的部份給出建議：「在寫旋律或和弦時，分解成更細節，一段抓耳的旋律要多長？要幾個小節？幾個音符？音符之間的距離、音階，甚至音層。每一首成功的歌曲，都有一套屬於自己的成功方式，沒有統一的標準及創作模式。」評審老師們反覆強調「聆聽」的重要性，多吸收不同風格種類的歌曲，進而分析、消化、最後再以自己的想法表達。詳細的品味不同和弦、不同旋律帶來的感受及想法。如果是一首快樂的歌，和弦就應該要隨著旋律做起伏，與歌詞做相呼應的手法。把每個音符都注入一個想法、一個感覺。
</p>
        </div>

        {/* 第五段 */}
        <div data-aos="fade-up" className='article article_5'>
          <h2>感性與理性的碰撞；創作是需要磨練的</h2>
          <p>在大專創作組上，老師們在感受創作的感性層面之時，給予參賽者們理性的建議。林鴻宇老師提到，大部分參賽者在歌詞創作上相對感性，不外乎重複的「找到光芒」、「憂鬱」、「悲傷」，或用呢喃的歌唱方式表示內心的低潮或感傷。老師提點，主題還是可以朝著這方面的風格去寫，但「 心中一定要有所念想。」把心中想呈現的畫面感帶給觀眾，讓觀眾有自己的想像空間。創作是一件很私密的事情，是心靈狀態衍生出來的作品，能把想法付諸行動並以歌詞表達，已經很不容易。創作是源源不絕的，不是只有一首創作曲，也不是只有一場比賽。從比賽中萃取精華之處，再藉由不斷的精進，讓自己的作品更有韻味。
          <br/>張仲麟老師也建議：「把創作當作學習目標。」，從中不斷的探索與學習，去模仿與聆聽不同風格的作品，是創作的路程上一件很重要的事。老師們建議，參賽者可以去分析近十年金曲獎最佳作詞人或最佳編曲人，分析他們獲獎的原因，把重點著重在學習樂理跟技巧與架構的方面，多聽不同音樂、參考成功案例。
<br/>在演奏組講評上，葉世康老師也讚許演奏的曲子多元性，但也建議參賽者要斟酌曲子的挑選，重複性高的歌曲就容易被比較。老師們建議廣泛的聆聽曲子，以水平的模式去探索。不同演奏家有不同的風格，不同風格又有不同的呈現方式。找到自己喜歡的歌曲，仔細的去琢磨與感受，去感受音樂帶來的情緒波動，從中鑽研出自己的想法。把情緒帶到自己的作品中。
<br/>「站上台表演已經是一件很勇敢的事，沒入圍不代表不好聽。」評審老師們鼓舞沒有順利晉級的參賽者，不要氣餒，也許在往後的比賽，會遇到喜歡自己作品的評審。並勉勵每位參賽者，在音樂的道路上不斷的磨練與成長。每天堅持下去，一定會有成功的一天！
<br/>最後感謝本次初賽評審老師，給予大家專業及細膩的講評，往後赤弦獎也會跟著參賽者們一同成長與進步，給大家更完整與精采的舞台。
</p>
        </div>
        <div data-aos="fade-left" className='interviewer date'><p>文章日期：112/11/18、19</p></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro6