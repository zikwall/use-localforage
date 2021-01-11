import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalForage } from '../useLocalForage';

describe('useLocalForage tests', () => {
    interface User {
        name: string;
        lastname: string;
        age: number;
    }

    const user = {
        name: "Name", lastname: "Lastname", age: 19
    };

    it('should be defined', () => {
        expect(useLocalForage).toBeDefined();
    });

    it('renders the hook correctly and checks types', () => {
        const { result } = renderHook(() => useLocalForage<User>('test', user));
        const [ value, set, remove ] = result.current;

        expect(value?.name).toBe("Name");
        expect(typeof set).toBe('function');
        expect(typeof remove).toBe('function');
    });

    it('should change user props', () => {
        const { result } = renderHook(() => useLocalForage<User>('test', user));

        act(() => {
            result.current[1]({
                name: `Name 2`,
                lastname: `Lastname 2`,
                age: 20,
            });
        });

        expect(result.current[0]?.age).toBe(20);

        act(() => {
            result.current[2]();
        });

        expect(result.current[0]).toBe(null);
    });
});
