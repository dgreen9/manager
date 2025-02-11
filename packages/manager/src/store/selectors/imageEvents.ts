import { Event } from '@linode/api-v4/lib/account';
import { createSelector } from 'reselect';

import { ApplicationState } from 'src/store';
import {
  isEventImageUpload,
  isEventInProgressDiskImagize,
} from 'src/store/events/event.helpers';

/**
 * Return a list of all in-progress
 * disk_imagize events where the event
 * is in progress and has a secondary_entity
 * (which will be the actual Image)
 */
export default createSelector(
  (state: ApplicationState['events']) => state.events || [],
  (events) =>
    events.filter(
      (thisEvent: Event) =>
        isEventInProgressDiskImagize(thisEvent) || isEventImageUpload(thisEvent)
    )
);
