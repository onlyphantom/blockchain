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
    .ant-descriptions-item-content {
        color: #61a0e0;
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

    code {
        background: rgb(59 119 137 / 70%)!important;
        color: white;
    }
}
`;

export const styles = [customStyles];
