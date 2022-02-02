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

    .ant-tabs,
    .ant-checkbox-wrapper,
    .ant-progress-circle .ant-progress-text,
    .ant-progress {
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

    .ant-card-head {
        background: #263545;
        color: white;
    }

    .ant-rate-star-half .ant-rate-star-first, 
    .ant-rate-star-full .ant-rate-star-second,
    ant-rate-star-first, .ant-rate-star-second  {
        color: #bedcd9;
    }

    .ant-rate-star-full .ant-rate-star-second {
        color: #3b7789;
    }

    // non-antd styles
    // ...
    // ...

    pre{
        color: white
    }

    .ant-input.correct, .ant-input.correct:focus,
    input.ant-input.ant-input-disabled.correct, input.ant-input.ant-input-disabled.correct:focus {
        border-color: #3b7789;
    }

    #primeTable .td {
        padding: 0.8rem 0.5rem;
    }

    .loadingGradient {
        background: rgb(59,119,137);
        background: linear-gradient(90deg, rgba(59,119,137,1) 0%, rgba(226,143,56,1) 100%);
        background: linear-gradient(
            -45deg
            , #ee7752, #e73c7e, #23a6d5, #23d5ab);
                color: white;
                animation: gradient 5s ease infinite;
                background-size: 400% 400%;
    }

    .loadingGradient h6 {
        color: black;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }



}
`;

export const styles = [customStyles];
