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

    .ant-form-item-label > label {
        color: #61a0e0;
    }
}
`;

export const styles = [customStyles];
