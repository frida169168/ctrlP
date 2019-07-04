import { MeterialModule } from './meterial.module';

describe('MeterialModule', () => {
  let meterialModule: MeterialModule;

  beforeEach(() => {
    meterialModule = new MeterialModule();
  });

  it('should create an instance', () => {
    expect(meterialModule).toBeTruthy();
  });
});
