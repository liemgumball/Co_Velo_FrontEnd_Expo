import styled from "styled-components";
import Background from './../Background';

export const Banner = styled.View`
  background: #b0daff;
  height: 190px;
  padding: 10%;
  padding-top: 50px;
  flex-direction: row;
  border:none;
  border-bottom: 4px dashed #fff;

  color: white;
`;
export const Crack = styled.View`
  height: 1px;
  width: 96%;
  border: 4px dashed #FDF7C3;
`;
export const ProfileIcon = styled.TouchableOpacity `
  height:60px;
`;
export const HomeContainerScreen = styled.View`
  background: #f2f1f8;
  height: 72%;
  padding: 15px;
`;
export const Warning = styled.View`
  background: #98dcff;
  border: 1px dashed #ccc;
  height: 220px;
  width: 110%;
  margin-top: 10%;
  margin-left: -5%;
  border-radius: 40px;
`;
export const NavBar = styled.View`
  background: #feff86;
  height: 7%;
  flex-direction: row;
  padding-top: 10px;
  border-top: 2px solid red;
`;
export const NavBarIcon = styled.View`
  flex-direction: column;
  font-size: 10px;
  width: 20%;
  padding: 0 3%;
`;
export const PageLogoVerify = styled.Image`
  width: 210px;
  margin-top: -32%;
  margin-left: 7%;
  height: 160px;
`;