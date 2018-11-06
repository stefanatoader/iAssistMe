package com.fii.taip.iassistme;

import android.os.Handler;

import com.fii.taip.iassistme.rabbitmq.Subscriber;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

public class SubscriberTest {
    ArgumentCaptor<Runnable> runnables = ArgumentCaptor.forClass(Runnable.class);
    @InjectMocks
    private Subscriber subscriber;

    @Test
    public void shouldDoSomthingAsynchrone() throws Exception {

       Thread mock = Mockito.mock(Thread.class);

        subscriber.subscribe(new Handler());

        runnables.getValue().run();

        verify(subscriber, times(1)).getSubscribeThread();
    }

}
