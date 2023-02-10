import React from 'react';
import '@testing-library/jest-dom'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns the correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(new Date().getFullYear());
});

test('returns the correct string', () => {
    const stringCorrect = getFooterCopy(true);
    expect(stringCorrect).toEqual("Holberton School");
});
test('returns the correct string', () => {
    const stringCorrect = getFooterCopy(false);
    expect(stringCorrect).toEqual("Holberton School main dashboard");
});

test('checking the returned string', () => {
    const notification = getLatestNotification();
    expect(notification).toEqual(<div><strong>Urgent requirement</strong> - complete by EOD</div>);
});