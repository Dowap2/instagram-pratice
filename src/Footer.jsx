import React from 'react';

const footerContent = "소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어"
const footerInstagram = "© 2020 INSTAGRAM FROM FACEBOOK"

export function Footer(props){
    return(
        <div>
            <div className="footer-content">
                {footerContent}
            </div>
            <div className="footer">
                {footerInstagram}
            </div>
        </div>
    )
}