package com.fii.taip.iassistme;

import android.os.Handler;

import com.fii.taip.iassistme.rabbitmq.Publisher;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

public class PublisherTest {
  /*  Publisher publisher;
    ArgumentCaptor<Runnable> runnables = ArgumentCaptor.forClass(Runnable.class);
    @Before
    public void setUp() throws Exception {
        publisher = new Publisher();

    }

    @Test
    public void publishMessage() throws Exception {
            Thread mock = Mockito.mock(Thread.class);

            publisher.publishMessage("sentMessage");

            runnables.getValue().run();

            verify(publisher, times(1)).getPublishThread();
    }

    @After
    public void tearDown() throws Exception {
        publisher.getPublishThread().interrupt();
    }*/
}