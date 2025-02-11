import { useCallback, useState } from 'react';

const useActiveCheckbox = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleSelect = useCallback((id: number) => {
    setSelectedItemId(prevId => (prevId === id ? null : id)); // Дозволяє скасувати вибір
  }, []);

  return {
    selectedItemId,
    handleSelect,
  };
};

export default useActiveCheckbox;
