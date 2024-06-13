

import * as React from 'react';


interface VerifyEmailEmailTemplateProps {
  verifyEmailToken: string,
}

export const VerifyEmailEmailTemplate: React.FC<Readonly<VerifyEmailEmailTemplateProps>> = ({
  verifyEmailToken,
}) => (
  <center style={{ width: '100%', fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#ffffff', padding: '20px' }}>
    <table align="center" width="100%" role="presentation" style={{maxWidth:'40em',padding:'20px',margin: '0 auto' ,backgroundColor:'#f4f4f5'}}>
      <tr>
        <td align="left" style={{ padding: '0', width: '100%', height: '10px', backgroundColor: '#f4f4f5',fontSize: '20px',fontWeight: 'bold' }}>
            <p className="text-xs">
              Chính m đã gửi mail
            </p>
          </td>
      </tr>
        <table align="center" cellPadding="0" cellSpacing="0" width="100%" style={{backgroundColor:'#ffffff',margin: '0 auto'}}>
          <tbody>
            <tr>
              <td align="left" style={{padding: '0 15px', backgroundColor: '#2f7d65',color: '#000000', height: '10px', lineHeight: '30px' }}>
              </td>
            </tr>  
            
            <tr>
              <td align="center" valign="top" style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
                <img src={'https://static.thenounproject.com/png/98018-200.png'} width="70" height="70" style={{ border: '0' }} />
              </td>
            </tr>
            
            <tr>
              <td align="center" style={{backgroundColor: '#ffffff', padding: '0 15px' }}>
                <span style={{color: '#000000', fontSize: '24px' }}>Email Verification</span>
              </td>
            </tr>

            <tr>
              <td style={{ height: '20px', lineHeight: '20px', fontSize: '20px' }}>&nbsp;</td>
            </tr>

            <tr>
              <td align="left" style={{ padding: '0 20px', fontSize: '15px' }}>
                <p>Hi ....!</p>
                <p>Thanks for starting the email sign-up process. We want to make sure it's really you. Please click the button below to verify. If you don't want to use email, you can ignore this message.</p>
              </td>
            </tr>

            <tr>
              <td style={{ height: '20px', lineHeight: '20px', fontSize: '20px' }}>&nbsp;</td>
            </tr>

            <tr>
              <td align="center">
                <table cellPadding="0" cellSpacing="0" style={{ minWidth: '80%' }}>
                  <tbody>
                    <tr>
                      <td align="center" style={{ backgroundColor: '#2f7d65', padding: '6px', border: '1px solid #000000' }}>
                        <a href={`http://localhost:3000/auth/verify-email?token=${verifyEmailToken}`} style={{ fontSize: '15px', fontWeight: 'bold', color: '#ffffff', textDecoration: 'none' }}>Verify My Email Address</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            
            <td align="center">
              <div  style={{ margin: '20px 0', borderTop: '1px solid #eaeaea', width: '90%', borderWidth: '1px 0 0 0', borderColor: '#eaeaea', borderStyle: 'solid', }}></div>
            </td>
            
            <tr>
              <td align="left" style={{padding: '0 15px', backgroundColor: '#2f7d65',color: '#ffffff', height: '15px', lineHeight: '30px' }}>
                <p className="text-xs">
                  From Bao Chan Team with luv
                </p>
              </td>
            </tr>  

            <tr>
               <td align="center" style={{ padding: '0 20px', width: '100%', height: '50px', backgroundColor: '#f4f4f5' }}>
                  <p className="text-xs">
                  © Copyright Lmao Lmao.
                  </p>
               </td>
            </tr>

          </tbody>
        </table>
      </table>
   </center>
  );
