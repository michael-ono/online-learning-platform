import { IoMdClose } from "react-icons/io";
import React from 'react';
import { createPortal } from 'react-dom';
import Card from "../card";
import styled, { StyleSheetManager, css } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const Modal = ({
  isShown,
  hide,
  modalContent,
  header,
  children,
  className,
  showClose,
  plain,
  contrast,
  sampleHeader,
  subHeading,
  accountModal,
  ...rest
}) => {
  const modal = (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <div>
        <Backdrop onClick={hide} plain={plain} />
        <Wrapper rounded {...rest}>
          {!!accountModal ? null : (
            <Header rounded contrast={contrast} sampleHeader={sampleHeader}>
              {showClose && <IoMdClose className="close-btn text-red-800" onClick={hide} />}
              {header}
              {sampleHeader && <p>{subHeading}</p>}
            </Header>
          )}
          {!!accountModal ? (
            <Content className={className} fullrounded>
              {modalContent ?? children}
            </Content>
          ) : (
            <Content className={className} rounded>
              {modalContent ?? children}
            </Content>
          )}
        </Wrapper>
      </div>
    </StyleSheetManager>
  );

  return isShown ? createPortal(modal, document.body) : null;
};

export default Modal;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  z-index: 70;
  width: 95%;
  outline: 0;
  transform: translateX(-50%);
  max-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    width: 650px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.79);
  z-index: 50;
  cursor: pointer;

  ${({ plain }) =>
    plain &&
    css`
      background: #ffffff;
    `};
`;

export const Header = styled.div`
  background-color: #ffffff;
  min-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 5px 5px 0 0;
    `};
  ${({ contrast }) =>
    contrast &&
    css`
      background-color: #;
      color: rgba(0, 0, 0, 0.79);
      font-size: 18px;
    `};
  ${({ sampleHeader }) =>
    sampleHeader &&
    css`
      background-color: #bf1212;
      display: block;
      padding: 15px 0 15px 30px;
      p {
        font-family: SF Pro Text;
        font-size: 1rem;
      }
    `};
  .close-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    cursor: pointer;
    stroke: black;
    ${({ contrast }) =>
      contrast &&
      css`
        stroke: rgba(0, 0, 0, 0.79);
      `};
  }
`;

export const Content = styled(Card)`
  overflow-y: auto;
  max-height: max-content;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 0 0 5px 5px;
    `};
  ${({ fullrounded }) =>
    fullrounded &&
    css`
      border-radius: 5px;
    `};
`;
