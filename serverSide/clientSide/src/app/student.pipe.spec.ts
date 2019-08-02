import { StudentPipe } from './student.pipe';

describe('StudentPipe', () => {
  it('create an instance', () => {
    const pipe = new StudentPipe();
    expect(pipe).toBeTruthy();
  });
});
