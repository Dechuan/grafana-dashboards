import { css } from 'emotion';

export const Styling = {
  label: css`
    display: grid;
    grid-template-areas: 'filtername percentagearea';
    grid-template-rows: 30px;
    grid-template-columns: 150px auto;
    grid-gap: 10px;
    height: auto;
    margin: 0;
  `,
  filterName: css`
    grid-area: filtername;
  `,
  percentage: css`
    grid-area: percentagearea;
    display: flex;
    justify-content: flex-end;
  `,
  filterHeaderWrapper: css`
    display: flex;
    justify-items: space-between;
    margin-bottom: 0 !important;
    margin-top: 20px !important;
  `,
  filterHeader: css`
    margin-right: auto;
    font-weight: 700;
    font-size: 14px;
  `,
  divider: css`
    margin-top: 0 !important;
    margin-bottom: 5px !important;
  `,
  showModeSwitcher: css`
    cursor: pointer;
  `,
};
