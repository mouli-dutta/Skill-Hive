const Storage = {
    prefix: 'learnai_',
    
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(this.prefix + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(this.prefix + key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    },
    
    clear() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.prefix)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (error) {
            console.error('Storage clear error:', error);
            return false;
        }
    },
    
    has(key) {
        return localStorage.getItem(this.prefix + key) !== null;
    },
    
    exportData() {
        const data = {};
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                const cleanKey = key.replace(this.prefix, '');
                data[cleanKey] = this.get(cleanKey);
            }
        });
        return data;
    },
    
    importData(data) {
        try {
            Object.keys(data).forEach(key => {
                this.set(key, data[key]);
            });
            return true;
        } catch (error) {
            console.error('Storage import error:', error);
            return false;
        }
    },
    
    getSize() {
        let total = 0;
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                total += localStorage.getItem(key).length;
            }
        });
        return total;
    }
};
