import selectExpensestotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = selectExpensestotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const total = selectExpensestotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensestotal(expenses);
    expect(total).toBe(114195);
});