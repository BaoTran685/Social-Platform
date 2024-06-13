

import * as React from 'react';

interface ResetPasswordEmailTemplateProps {
  resetPasswordToken: string
}

export const ResetPasswordEmailTemplate: React.FC<Readonly<ResetPasswordEmailTemplateProps>> = ({
   resetPasswordToken
}) => (
  <center style={{ width: '100%', fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#ffffff', padding: '20px' }}>
  <table align="center" width="100%" role="presentation" style={{maxWidth:'40em',padding:'20px',margin: '0 auto' ,backgroundColor:'#FFD133'}}>
  <tr>
          <td align="left" style={{ padding: '0', width: '100%', height: '10px', backgroundColor: '#FFD133',fontSize: '20px',fontWeight: 'bold' }}>
              <p className="text-xs">
              Chính m đã quên pass
              </p>
              </td>
        </tr>
      <table align="center" cellPadding="0" cellSpacing="0" width="100%" style={{backgroundColor:'#ffffff',margin: '0 auto'}}>
        <tbody>
        <tr>
            <td align="left" style={{padding: '0 15px', backgroundColor: '#efa600',color: '#000000', height: '10px', lineHeight: '30px' }}>
            </td>
          </tr>  
          <tr>
            <td align="center" valign="top" style={{ backgroundColor: '#ffffff', padding: '20px 0' }}>
              <img src={'https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-forgot-line-icon-vector-png-image_6628807.png'} width="70" height="70" style={{ border: '0' }} />
            </td>
          </tr>
          <tr>
            <td align="center" style={{backgroundColor: '#ffffff', padding: '0 15px' }}>
              <span style={{color: '#000000', fontSize: '24px' }}>Forgot Your Password?</span>
            </td>
          </tr>
          <tr>
            <td style={{ height: '20px', lineHeight: '20px', fontSize: '20px' }}>&nbsp;</td>
          </tr>
          <tr>
            <td align="center" style={{ padding: '0 20px', fontSize: '20px' }}>
              <p>Click the button below to reset your password</p>
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
                    <td align="center" style={{ backgroundColor: '#efa600', padding: '6px', border: '1px solid #000000' }}>
                      <a href={`http://localhost:3000/auth/reset-password?token=${resetPasswordToken}`} style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', textDecoration: 'none' }}>Reset My Password</a>
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
            <td align="left" style={{padding: '0 15px', backgroundColor: '#efa600',color: '#000000', height: '15px', lineHeight: '30px' }}>
            <p className="text-xs">
                Contact Bao Chan Team For Further Assist.
            </p>
            </td>
          </tr>  
          <tr>
          <td align="center" style={{ padding: '0 20px', width: '100%', height: '50px', backgroundColor: '#FFD133' }}>
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

