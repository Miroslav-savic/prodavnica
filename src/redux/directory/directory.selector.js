import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirecotryItems = createSelector(
    [selectDirectory],
    (directory) => directory.sections
)