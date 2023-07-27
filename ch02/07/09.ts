type K = keyof (Person | Lifespan); //타입이 never

// 두 인터페이스의 합집합 즉 Person 이거나 Lifespan 일때도 포함됨
// 따라서 각 키들이 같은 게 있어야하는데(같은게 있어야 타입을 추론할수있기에) 없으므로 never
