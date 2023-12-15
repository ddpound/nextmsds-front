import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr.MSDS',
  description: 'Dr.Msds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>
          <div className='hader-menu'>
            <div className='header-logo-div'>
              <Link href={"/"}>
                <div>
                  <img src="/main-img/common/logo/logo.png"/>
                </div>
                <div>
                  <labe>Dr.MSDS</labe>
                </div>
              </Link>
            </div>
            <div className='header-menu-div'>
              <ol>
                <li>국내외 규제</li>
                <li>MSDS</li>
                <li>회사정보</li>
                <li>게시판</li>
                <li>관리자 설정</li>
              </ol>
            </div>
            <div className='header-info-div'>
              <div>
                <img src='/main-img/common/gnb_global.png'/>
                <label>KOR</label>
                <img src='/main-img/common/gnb_user.png'/>
                <img src='/main-img/common/gnb_search.png'/>
              </div>
              <div>
                2019-05-27 ~ 2030-12-31 <br/>
                계약건수 99999건 (작성건수 : 11611건 / 삭제건수 : 721건)
              </div>
            </div>
          </div>
        </header>
          {children}
        <footer>
          <div className='footer-info'>
            <div>
              <label>개인정보처리방침 이용약관</label>
              <label>
                <label>시스템 문의 chemtopia@chemtopia.net</label>
                <select>
                  <option value={""}>관련사이트바로가기</option>
                  <option value={"http://chemtopia.net"}>켐토피아 홈페이지</option>
                  <option value={"http://www.biochemtopia.net"}>켐토피아 생활연구센터</option>
                </select>
              </label>
            </div>
            <div>
              Copyright (c) 2006 CHEMTOPIA. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
