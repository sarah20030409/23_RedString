import React from 'react'
import Fade from 'react-reveal/Fade';


import MBG3 from '../../../Img/About_Line2.webp'
import MBG1 from '../../../Img/About_Line1.png'

import LuImg_1 from '../../../Img/Interview/LuImg_1.jpg'
import LuImg_2 from '../../../Img/Interview/LuImg_2.jpg'
import LuImg_3 from '../../../Img/Interview/LuImg_3.jpg'
import LuImg_4 from '../../../Img/Interview/LuImg_4.jpg'
import LuImg_5 from '../../../Img/Interview/LuImg_5.jpg'
import '../Intro.css'
import '../IntroRWD.css'

const Intro1 = () => {
  return (
    <>
    <div className='intro1-flex intro1' style={{backgroundImage:`url(${MBG3})`}}>
      <div className='BG_Img2' style={{backgroundImage:`url(${MBG1})`}}>
      <div className='intro1-wrap'>
        {/* 呂允的文章 */}
        {/* 第一段 */}
        <div data-aos="fade-right" className='interviewer'><p>採訪/文章：陳品聿</p></div>
        <div data-aos="fade-up" className='article article_1'>
          <img src={LuImg_5} />
          <h2><Fade bottom cascade>參賽獲獎打響知名度<br/>
            呂允：願能時刻意識到當下的自己</Fade></h2>
        </div>
        
        {/* 第二段 */}
        <div data-aos="fade-up" className='article article_2'>
          <p>原已小有名氣的呂允，在第21屆赤弦獎拿下大專創作組第一名、大專團體組第一名、最佳編曲獎。打響知名度的他，之後的半年內連發三首新歌，在串流平台上多次奪下熱門榜榜首，成為炙手可熱的明日之星。
本次也是赤弦獎賽後，首次針對呂允的心路歷程進行專訪。</p>
        </div>

        {/* 第三段 */}
        <div data-aos="fade-up" className='article article_3'>
          <h2>「歌手或音樂創作者，都是自己給自己的定義。」</h2>
          <p>2000年出生於台北，畢業於國立臺灣藝術大學戲劇系的呂允，母親是音樂老師，從小就喜歡和哥哥一起聽音樂，是一個表演慾很強的小孩。或許是呂允從小受家庭的熏陶，隱藏在自己體內的音樂細胞就此擴散蔓延，造就了現在的他。從無到有，直至現在的呂允，過程中不免有對自身能力的懷疑、對未來的迷茫，甚至對自我身分的模糊定義。畢竟人生就是一邊失去、一邊尋找的過程，每一個階段的自己，都會有不同的感悟與思維，該如何正視並追隨自己內心的想法才是最主要的。
呂允：「我之前沒有想過自己是歌手或音樂製作人這個角色，總認為自己還沒達到理想的目標。但現在不會了，歌手或是音樂創作者，這些都是自己給自己的定義。」</p>
        </div>

        {/* 第四段 */}
        <div data-aos="fade-up" className='article article_4'>
          <h2>「那一夜，我終究能衝破界限。」</h2>
          <p>2018年，《等待你那天》在第六屆H.O.T校際原創音樂大賽首次公開亮相，在2022年3月重新製作發行；同年5月，推出新歌《記得呼吸》，曲風輕快、朗朗上口；7月又再推出《夏夕夏景》，對比賽中的呂允自我反向喊話。
我們詢問起呂允最近的行程及工作安排如何？採訪中，呂允苦笑回答：「目前待業中。」在常人的眼光看來，音樂及藝術相關的事業，大多被人們稱為夢想，而不是工作。講白話些，音樂是吃不飽飯的。他坦言，現在獨立創作的情況下，資金是很大的問題。雖然稱不上窮困潦倒，但也沒有靠音樂致富。不過，這些是自己喜愛的事物，現在先辛苦一點養活自己的夢想，期待五年後的自己，已經是一個成熟且獨立的音樂製作人了。
呂允：「音樂吃不飽是初期音樂人大部分會遇到的事，我們也不能改變這個世界認為音樂難以謀生的這種看法。但這件事情沒有存在好壞，這是我夢想中的一部分，就是喜歡才會繼續做下去。」
呂允：「我之前沒有想過自己是歌手或音樂製作人這個角色，總認為自己還沒達到理想的目標。但現在不會了，歌手或是音樂創作者，這些都是自己給自己的定義。」</p>
        </div>

        {/* 第五段 */}
        <div data-aos="fade-up" className='article article_5'>
          <h2>「在錯綜的道路上尋找著意義。」</h2>
          <p>從高中的表演藝術科系、到大學戲劇系畢業，呂允的求學生涯一路走來都與藝術密不可分。不可否認的是，戲劇系對呂允目前的創作而言，有相對提升對音樂的敏感度。
在完成一齣戲劇中，呂允經常扮演音樂設計的角色，從舞台、劇本、文字、劇情去發想劇場裡大大小小的配樂，符合戲劇所需的氛圍與需求，創作與舞台完美融合的劇場音樂。但劇場音樂和流行音樂還是有所差別，四年戲劇系提升了呂允對音樂的感受與細膩程度，其餘對流行音樂的探討與琢磨，都來自呂允對自己所追求的音樂堅持還有和朋友、前輩的交流和建議。</p>
        </div>

        {/* 第六段 */}
        <div data-aos="fade-up" className='article article_6'>
          <h2>「拋開音樂本身，才能追尋音樂。」</h2>
          <p>第21屆赤弦獎大專創作組第一名，呂允和楊峻綱以《空拍》合作無間，像闡述一個人在等待與卻步，畫面感跟隨呂允的歌聲此起彼落，心臟隨著楊峻綱的鋼琴伴奏空了一拍，琴聲滴落，更將平凡的畫面賦予濃厚的意義。
這樣的創作來源，呂允說，其實都是從日常生活與人生中的反思所帶給他的靈感。提到創作，他笑稱自己是一個佛系創作者。「如果寫不出東西，就不要著急寫了。我通常會讓自己放個假，休息一段時間，看個影片、電影、連續劇，甚至找朋友聊天，給自己多一點生活上的刺激，拋開音樂本身這件事情。」從朋友的談話、人生經歷去寫歌，甚至去想像，把自己當作編劇一樣，把一個故事寫完。例如新歌《夏夕夏景》是關於比賽失利，將自己沈浸在失敗的氛圍，想像「自己覺得自己超爛、沒有人看好我」的心情去創作。
對周遭的人事物有所好奇、期待，進而想像後續的發展，將這些想法譜寫成詞曲。對這個世界保持好奇，維持活躍的思考與邏輯，不要提前侷限自己的世界觀，或許就是呂允能完美展現自己想表達的音樂的主要原因。</p>
        </div>

        {/* 第七段 */}
        <div data-aos="fade-up" className='article article_7'>
        <img src={LuImg_4}/>
        <img src={LuImg_3}/>
        </div>

        {/* 第八段 */}
        <div data-aos="fade-up" className='article article_8'>
        <h2>「把比賽名次輕描淡寫，重點是過程，展現你自己。」</h2>
          <p>從踏上音樂的這條道路開始，呂允得到絕大多數親朋好友的鼓勵，家人也都很支持呂允做自己想做的事，還會常常分享呂允的歌給同事或朋友聽，朋友也是極力推薦轉發呂允的歌曲。
這些支持都成為他最堅強的後盾，讓他能無所後慮地參加比賽及創作自己喜歡的音樂。經歷大大小小的比賽，從懵懂無知蛻變成現在沉穩的他，呂允提到前期比賽時，自己也曾有得失心，過於執著名次及數字，遺失了參加比賽的初衷。
呂允：「當你發現有人比你還厲害，你會莫名的想跟人家比較，會真的想得名。如果下一次比賽持續執著在名次，成績不如預想，就會很沮喪。」</p>
          <p>不過後來，呂允意識到自己的狀態被影響後，很快就想開了。之後對於這些身外之物都看得輕描淡寫，比賽最重要的是展現自己想表達的東西，結果並不
            是重點，也不用在意，重要的是過程。在第21屆赤弦獎初賽結束，呂允認識了許多參加赤弦獎的參賽選手，大家都成為了志同道合的朋友，甚至三五好友集結
            成「Rick＆Party」一同前往宜蘭創作。在這樣的大團體裡，你會看到跟自己年紀相仿的音樂人，各個才華洋溢，令人眼界大開，多去欣賞他人的音樂，就
            不會侷限在自己的世界裡面，對自己的創作是絕對有幫助的。呂允：「我認為比賽最重要的事是結交朋友。或許隨著年紀，大家不會再出現於大專院校的比賽
            圈，但未來也會是往同一條路邁進的夥伴，都是彼此的後盾。」
呂允帶給赤弦獎第22屆參賽者的話：「希望大家都可以玩得開心，多認識旁邊的參賽者，或是你欣賞的人，多去跟他們搭話，最重要的是享受舞台。」</p>
        </div>

         {/* 第九段 */}
         <div data-aos="fade-up" className='article article_9'>
          <h2>「聲淵」反應現實世界：該如何選擇、面對或忽略各種聲音？</h2>
          <p>呼應本次第22屆赤弦獎主視覺「聲淵」：現在的世界就像聲淵，所有所見所聞都不一定是完整的，我們在水中載浮載沉，真相似有似無，世界多彩卻混濁。在聲淵裡，我們生活中包覆各種聲音，該如何去選擇、去面對、去跟隨或去忽略？
現在的網路生態中，「酸民」與「黑粉」勢必存在。對於一些藝人明星的先例，呂允告訴我們，他已經預想過無數遍如何面對網路上負面的聲音，但未來真的發生，自己還是不確定能否調適好狀態。呂允：「自己還算是一個心態健康的人，雖然多少還是會被影響，但內心會有對自己標準的衡量。如果他們講得東西是真的可以改進的，這些留言就會變成動力，可以改進的就不會是批評，因為他們說的是事實。
看到這些惡意言論時，呂允就會想起那些給他的鼓勵支持與讚美。我們不該因為少數言論而覆蓋全部讚美你的人，這才是我們該學習去平衡調適、去忽略、去選擇對自己真正有幫助的聲音。有人喜歡，就會有人討厭，這是無可避免的，呂允感謝大家的批評指教，總是要有批評才會有進步，謝謝所有人的留言，不管好的壞的。</p>
        </div>

        {/* 第十段 */}
        <div data-aos="fade-up" className='article article_10'>
          <h2>「願我能時刻意識到當下的自己。」</h2>
          <p>「聽到空拍的時候、聽到你的歌聲，創作的詞曲、從那時候開始，感覺自己無論在哪個低潮階段，都會想到這首歌，這樣的歌聲可以治癒自己，從啜泣聲到放聲大哭，隨著音樂減弱最後消失在寂靜的夜裡，音樂陪伴了我度過幾個失眠的夜晚，謝謝呂允，繼續加油，不要忘了初衷也不要迷失自己，繼續朝著夢想前進。」粉絲的留言支持、私訊鼓勵，呂允都有記得，偶爾有特別令人印象深刻的，他還會截圖下來，在不相信自己的時候看一下，給自己加油打氣。呂允：「我的音樂就是靠大家去口耳相傳，我很幸運、很感動，感謝大家可以讓我在這個階段，有如此強大的後盾。」
每位創作者最幸福的，不過是有人發現自己和他的音樂，進而追蹤、關注他未來的作品。之後呂允也會持續創作自己喜歡的音樂，相信他有足夠的底氣，能夠成為自己心目中最理想的音樂人。</p>
        </div>
        <div data-aos="fade-left" className='interviewer date'><p>採訪日期：111/08/20</p></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro1