import { css } from '@emotion/react';

const customStyles = css`
    h1, h2, h3, h4, h5, h6 {
        color: #61a0e0;
    }

    button {
        background: #61a0e0;
        padding: 2px 6px;
        border-radius: 3px;
        margin: 1%;
        border: none;
    }

    .ant-form-item-label > label, 
    .ant-descriptions-item-content, 
    .ant-descriptions-title {
        color: inherit;
    }

    .ant-descriptions-bordered .ant-descriptions-item-label {
        background-color: rgb(147 205 255 / 40%);
        font-weight: 600;
    }
    
    .ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
        color: #61a0e0;
    }

    .ant-divider-inner-text {
        color: #61a0e0;
    }

    .ant-radio-wrapper, .ant-radio-group, .ant-form-item, .ant-form {
        color: inherit;
    }

    code {
        background: rgb(59 119 137 / 70%)!important;
        color: white;
    }

    .ant-btn-primary, .ant-btn-primary:focus,
    .ant-btn-primary:active, .ant-btn-primary.active, .ant-btn-primary:active:focus, .ant-btn-primary:active:hover, .ant-btn-primary.active:focus, .ant-btn-primary.active:hover, .ant-btn-primary:active:focus:hover, .ant-btn-primary:active:hover:focus, .ant-btn-primary.active:focus:hover, .ant-btn-primary.active:hover:focus {
        background: #3b7789;
        border-color: #3b7789;
    }

    .ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
        border-color: rgb(156, 220, 254);
    }

    .ant-tabs {
        color: inherit;
        font-size: inherit;
    }

    .ant-collapse-item, .ant-collapse-content, .ant-collapse, 
    .ant-collapse > .ant-collapse-item > .ant-collapse-header,
    .ant-input-group {
        color: inherit;
    }

    .ant-collapse {
        background: inherit;
    }

    .ant-collapse-content-box, .ant-collapse-content  {
        background: none;
    }

    .ant-alert > span.ant-alert-icon {
        font-size: 2.5em;
    }


    // non-antd styles
    // ...
    // ...

    pre{
        color: white
    }

    #primeTable .td {
        padding: 0.8rem 0.5rem;
    }




}
`;

export const styles = [customStyles];
