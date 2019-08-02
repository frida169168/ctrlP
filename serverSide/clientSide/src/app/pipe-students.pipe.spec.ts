import { PipeStudentsPipe } from './pipe-students.pipe';

describe('PipeStudentsPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeStudentsPipe();
    expect(pipe).toBeTruthy();
  });
});
