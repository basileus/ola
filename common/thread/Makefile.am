include $(top_srcdir)/common.mk

noinst_LTLIBRARIES = libthread.la
libthread_la_SOURCES = ConsumerThread.cpp Mutex.cpp SignalThread.cpp \
                       Thread.cpp ThreadPool.cpp

if BUILD_TESTS
TESTS = ThreadTester FutureTester
endif
check_PROGRAMS = $(TESTS)

ThreadTester_SOURCES = ThreadPoolTest.cpp ThreadTest.cpp
ThreadTester_CXXFLAGS = $(COMMON_TESTING_FLAGS)
ThreadTester_LDADD = $(COMMON_TESTING_LIBS) \
                     ../base/libolabase.la \
                     ../utils/libolautils.la \
                     ./libthread.la

FutureTester_SOURCES = FutureTest.cpp
FutureTester_CXXFLAGS = $(COMMON_TESTING_FLAGS)
FutureTester_LDADD = $(COMMON_TESTING_LIBS) \
                     ../base/libolabase.la \
                     ../utils/libolautils.la \
                     ./libthread.la
