package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Use service with the mock
        MyService service = new MyService(mockApi);
        service.fetchData(); // This should call mockApi.getData()

        // 3. Verify interaction
        verify(mockApi).getData(); // ✅ Passes if getData() was called exactly once
    }
}
