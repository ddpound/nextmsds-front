import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='main-top'>
        <div className='main-top-slider'>
          <div className='main-slider'><img src="/main-img/main-slide/main_img01.png"/></div>
          <div className='main-slider'><img src="/main-img/main-slide/main_img02.png"/></div>
          <div className='main-slider'><img src="/main-img/main-slide/main_img03.png"/></div>
        </div>
        <div className='main-top-right'>
          <div className='main-content-box'>
            <div className='main-content-box-item'>
              <div className='main-content-item-header'>규제별 취급 MSDS <img src="/main-img/common/btn_more.png" /></div>
              <div className='main-content-box-body'>
                <table className='main-gosi-msds-table'>
                  <tbody>
                    <tr>
                      <th rowSpan={3}>화관법</th>
                      <td>유독물질</td>
                      <td>3018건</td>
                    </tr>
                    <tr>
                      <td>사고대비물질</td>
                      <td>1661건</td>
                    </tr>
                    <tr>
                      <td>취급제한물질</td>
                      <td>1206건</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan={3}>산안법</th>
                      <td>노출기준설정물질</td>
                      <td>4476건</td>
                    </tr>
                    <tr>
                      <td>관리대상유해물질</td>
                      <td>5072건</td>
                    </tr>
                    <tr>
                      <td>작업환경측정대상유해인자</td>
                      <td>4590건</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='main-content-box-item'>
              <div className='main-content-item-header'>부서별 MSDS 관리 <img src="/main-img/common/btn_more.png" /></div>
              <div>
                <table>
                  <thead>
                  <tr>
                    <th>
                      <div>구분</div>
                    </th>
                    <th>
                      <div>제품</div>
                    </th>
                    <th>
                      <div>상품</div>
                    </th>
                    <th>
                      <div>원/부원료</div>
                    </th>
                    <th>
                      <div>반제품</div>
                    </th>
                    <th>
                      <div>기타</div>
                    </th>
                  </tr>
                </thead>
								<tbody className='dept-msds-table-tbody'>
                  <tr>
                    <td>관리부</td>
                    <td>2864</td>
                    <td>23</td>
                    <td>964</td>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>경영본부<br/>산업안전보건팀 </td>
                    <td>175</td>
                    <td>0</td>
                    <td>5</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                  <tr>
                    <td>한화토탈</td>
                    <td>142</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
                </table></div>
            </div>
            <div className='main-content-box-item'>
              <div className='main-content-item-header'>법령업데이트 <img src="/main-img/common/btn_more.png" /></div>
              <div className='main-content-box-body main-content-law-update'>

              </div>
            </div>
            <div className='main-content-box-item'>
              <div className='main-content-item-header'>MSDS 변경 제출 및 영업비밀 유효기간 알림</div>
            </div>
          </div>
          <div className='main-notice-div'>
            <div className='main-notice-div-header'>공지사항 <img src="/main-img/common/btn_more.png" /></div>
            <div className='main-notice-div-body'>
              <div>
                <label>패치노트</label><label>2023-12-22</label>
              </div>
              <div>
                <label>Dr.MSDS 운영안내</label><label>2022-10-09</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-bottom'>
        <img src="/main-img/main-slide/img_slide02.png" />
        <img src="/main-img/main-slide/img_slide04.png" />
        <img src="/main-img/main-slide/img_slide05.png" />
        <img src="/main-img/main-slide/img_slide06.png" />
        <img src="/main-img/main-slide/img_slide07.png" />
        <img src="/main-img/main-slide/img_slide08.png" />
        <img src="/main-img/common/ic_prev.png"/>
        <img src="/main-img/common/ic_next.png"/>
      </div>
    </main>
  )
}
