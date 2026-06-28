const Analytics = {
    init() {
        this.trackVisitor();
    },
    
    trackVisitor() {
        const visitorId = Storage.get('visitorId');
        
        if (!visitorId) {
            // New visitor - generate unique ID
            const newVisitorId = this.generateVisitorId();
            Storage.set('visitorId', newVisitorId);
            
            // Increment total visitor count
            this.incrementVisitorCount();
        }
    },
    
    generateVisitorId() {
        return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    incrementVisitorCount() {
        const currentCount = Storage.get('totalVisitors', 0);
        Storage.set('totalVisitors', currentCount + 1);
    },
    
    getTotalVisitors() {
        return Storage.get('totalVisitors', 0);
    },
    
    getVisitorId() {
        return Storage.get('visitorId', null);
    },
    
    isNewVisitor() {
        return !Storage.has('visitorId');
    }
};
