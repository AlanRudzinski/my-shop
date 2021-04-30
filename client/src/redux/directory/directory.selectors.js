import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)

export const selectDirectorySectionsLinkURL = createSelector(
    [selectDirectorySections],
    sections => sections.map(section => section.linkUrl)
)