import { execa, type ExecaError } from 'execa';

type RunCommandParams = {
  command: string;
  args?: string[];
};

export const runCommand = async ({ command, args = [] }: RunCommandParams) => {
  try {
    const result = await execa(command, args);
    return {
      success: true,
      stdout: result.stdout,
      stderr: result.stderr,
    };
  } catch (err: unknown) {
    const e = err as ExecaError;
    return {
      success: false,
      stdout: '',
      stderr: e.stderr ?? (err instanceof Error ? err.message : 'Unknown error'),
    };
  }
};